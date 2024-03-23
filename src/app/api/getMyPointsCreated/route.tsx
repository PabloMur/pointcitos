import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email");
    const myPointsRef = firestore.collection("points");
    const querySnapshot = await myPointsRef
      .where("createdBy", "==", email)
      .get();

    const myPointsData: any = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // Agregar el ID del documento a los datos
      myPointsData.push({ id: doc.id, ...data });
    });

    return NextResponse.json({ email, myPoints: myPointsData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
