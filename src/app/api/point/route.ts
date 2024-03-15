import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";

export async function GET(NextRequest: NextRequest) {
  const params = NextRequest.nextUrl.searchParams.get("pointerId");

  try {
    if (!params) {
      return NextResponse.json({
        message: "Se requiere un pointerId",
      });
    }

    const pointerDataRef = await firestore
      .collection("codePoint")
      .doc(params)
      .get();

    if (!pointerDataRef.exists) {
      return NextResponse.json({
        message: "No se encontraron datos para el pointerId proporcionado",
      });
    }

    const pointerCode = pointerDataRef.data();
    if (!pointerCode || !pointerCode.pointerId) {
      throw new Error(
        "Los datos del código de puntero son incorrectos o incompletos"
      );
    }

    const pointerData = await firestore
      .collection("points")
      .doc(pointerCode.pointerId)
      .get();

    if (!pointerData.exists) {
      return NextResponse.json({
        message: "No se encontraron datos para el pointerId proporcionado",
      });
    }

    return NextResponse.json({
      message: "Información del point",
      data: pointerData.data(),
    });
  } catch (error) {
    console.error("Error al obtener la información del point:", error);
    return NextResponse.json({
      message: "Error al obtener la información del point",
    });
  }
}

export function POST() {
  return NextResponse.json("aca se va a crear un point");
}

export function PATCH() {
  return NextResponse.json("aca se va a actualizar o editar un point");
}

export function DELETE() {
  return NextResponse.json("aca se va a eliminar un point");
}
