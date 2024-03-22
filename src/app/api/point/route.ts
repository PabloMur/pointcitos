import { NextRequest, NextResponse } from "next/server";
import { generarNumeroAleatorio } from "@/lib/Tools";
import { firestore } from "@/lib/FirebaseConn";
import { cloudinary } from "@/lib/CloundinaryConnection";

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
  //hay que ver como hacer lo de la imagen, pero tiene que ser aca
  try {
    const { creator, participants, points } = await req.json();

    const numeroAleatorio = generarNumeroAleatorio().toString();

    //crear el point en la base de datos
    // ref a la collection points
    const ref = firestore.collection("points");
    //ref a la collection de los shotsCodes
    const codePoints = firestore.collection("codePoint").doc(numeroAleatorio);
    //creando el pointer con los datos enviados por el front
    const pointer = await ref.add({
      creator,
      participants,
      points,
    });

    //id largo del pointer
    const pointerLongID = pointer.id;

    // creando la vinculacion del codigo largo con el corto
    await codePoints.set({
      pointerId: pointerLongID,
    });

    return NextResponse.json({
      created: true,
      shortID: numeroAleatorio,
      message:
        "Comparte este código con las personas que quieras invitar al pointer " +
        numeroAleatorio,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      message: "Hubo un error al crear el Pointer",
      error,
    });
  }
}

export function PATCH() {
  return NextResponse.json("aca se va a actualizar o editar un point");
}

export function DELETE() {
  return NextResponse.json("aca se va a eliminar un point");
}
