import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/FirebaseConn";

export async function POST(req: NextRequest) {
  try {
    const { code, category } = await req.json();
    const easyCodeRef = firestore.collection("easyCode");
    const easyCodeDoc = await easyCodeRef.doc(code).get();
    const easyCodeData = easyCodeDoc.data() as any;
    const pointerId = easyCodeData.easyCode;

    const pointerRef = firestore.collection("pointers");
    const pointerDoc = await pointerRef.doc(pointerId).get();
    const pointerData = pointerDoc.data() as any;
    const points = pointerData.points.filter(
      (point: any) => point.category === category
    );

    return NextResponse.json({
      easyCodeData,
      points,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
