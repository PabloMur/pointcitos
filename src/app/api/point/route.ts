import { NextRequest, NextResponse } from "next/server";
import { generarNumeroAleatorio } from "@/lib/Tools";
import { firestore } from "@/lib/FirebaseConn";
import {
  cloudinary,
  uploadImageOnCloudinary,
} from "@/lib/CloundinaryConnection";

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

export async function POST(req: NextRequest) {
  try {
    const { point, code } = await req.json();

    // Obtener el ID del pointer a partir del código
    const easyCodeRef = firestore.collection("easyCode").doc(code);
    const easyCodeData = (await easyCodeRef.get()).data() as any;
    const pointerId = easyCodeData.easyCode;

    if (!pointerId) {
      return NextResponse.json({
        error: "No se encontró ningún pointer con el código proporcionado",
      });
    }

    // Agregar el punto al array de puntos del pointer
    const pointerRef = firestore.collection("pointers").doc(pointerId);
    const pointerDoc = await pointerRef.get();
    const pointerData = pointerDoc.data();

    if (!pointerData) {
      return NextResponse.json({
        error: "No se encontró ningún pointer con el ID proporcionado",
      });
    }

    const points = pointerData.points || [];

    if (point.image) {
      const finalImage = await uploadImageOnCloudinary(point.image);
      point.image = finalImage;
    }

    points.push(point);

    await pointerRef.update({ points });

    return NextResponse.json({
      code,
      message: "Punto agregado correctamente al pointer",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Hubo un error al procesar la solicitud",
    });
  }
}

export function PATCH() {
  return NextResponse.json("aca se va a actualizar o editar un point");
}

export function DELETE() {
  return NextResponse.json("aca se va a eliminar un point");
}
