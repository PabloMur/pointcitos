import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";
import { generarNumeroAleatorio } from "@/lib/Tools";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code") as any;

    const easyCodeRef = firestore.collection("easyCode");
    const pointerRef = firestore.collection("pointers");

    const easyCodeDoc = await easyCodeRef.doc(code).get();

    if (!easyCodeDoc.exists) {
      return NextResponse.json({
        code,
        message: "El código proporcionado no existe en la colección easyCode",
        data: null,
      });
    }

    const pointerData = easyCodeDoc.data() as any;
    const pointerRealDoc = await pointerRef.doc(pointerData.easyCode).get();

    if (!pointerRealDoc.exists) {
      return NextResponse.json({
        code,
        message:
          "No se encontró el puntero correspondiente en la colección pointers",
        data: null,
      });
    }

    const pointerRealData = pointerRealDoc.data();

    return NextResponse.json({
      pointerId: pointerData.easyCode,
      code,
      data: pointerRealData,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, pointerName } = await req.json();

    if (!email || typeof email !== "string") {
      throw new Error("Email no válido");
    }

    const ref = firestore.collection("pointers");
    const easyCode = generarNumeroAleatorio().toString();
    const easyCodeRef = firestore.collection("easyCode").doc(easyCode);

    const pointer = await ref.add({
      createdBy: email,
      participants: [],
      pointerName,
      easyCode,
      points: [],
    });

    if (pointer) {
      await easyCodeRef.set({
        easyCode: pointer.id,
        creator: email,
      });
      return NextResponse.json({
        message: "creando pointer",
        email,
        pointer,
        easyCode,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code") as any;
    const easyCodeRef = firestore.collection("easyCode");
    const easyCodeDoc = await easyCodeRef.doc(code).get();

    if (!easyCodeDoc.exists) {
      return NextResponse.json({
        code,
        message: "El código proporcionado no existe en la colección easyCode",
        deleted: false,
      });
    }

    const easyCodeData = easyCodeDoc.data() as any;
    const pointerId = easyCodeData.easyCode;
    const pointerData = firestore.collection("pointers").doc(pointerId);

    if ((await pointerData.get()).exists) {
      await easyCodeRef.doc(code).delete();
      await pointerData.delete();
    }

    return NextResponse.json({
      code,
      message: "Pointer eliminado correctamente",
      deleted: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({});
  }
}
