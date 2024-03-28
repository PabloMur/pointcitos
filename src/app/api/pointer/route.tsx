import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";
import { generarNumeroAleatorio } from "@/lib/Tools";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code") as any;

    const easyCodeRef = firestore.collection("easyCode");
    const pointerRef = firestore.collection("pointers");

    const pointerRealId = await easyCodeRef.doc(code).get();
    const pointerData = pointerRealId.data() as any;

    const pointerRealData = (
      await pointerRef.doc(pointerData.easyCode).get()
    ).data();

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
