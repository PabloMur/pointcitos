import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();
    const codeRef = firestore.collection("easyCode").doc(code);
    const codeData = await codeRef.get();
    const codeExists = codeData.exists;

    if (codeExists)
      return NextResponse.json({
        codeExists,
        message: "El código proporcionado es válido!",
      });
    else {
      return NextResponse.json({
        codeExists,
        message: "Error, no se encuentra el código proporcionado",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
