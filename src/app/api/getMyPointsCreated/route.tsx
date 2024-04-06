import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email");
    const myPointsRef = firestore.collection("easyCode");
    const querySnapshot = await myPointsRef.where("creator", "==", email).get();

    const myPointsData: any = [];
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      const ref = firestore.collection("pointers");
      const docFinal = await ref.doc(data.easyCode).get();
      const docPointerData = docFinal.data();

      myPointsData.push({
        ...data,
        id: doc.id,
        pointerData: docPointerData,
      });
    }

    return NextResponse.json({ email, myPoints: myPointsData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
