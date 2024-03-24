import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";
import { generarNumeroAleatorio } from "@/lib/Tools";
import { FigureCaption } from "react-bootstrap";

export async function POST(req: NextRequest) {
  try {
    const { email, pointerName } = await req.json();

    if (!email || typeof email !== "string") {
      // Verificar si el email es válido
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
