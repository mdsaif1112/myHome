import { NextResponse } from "next/server";
import connectDb from "../connectDb";

export const GET = async () => {
  const clientPromise = await connectDb();

  const propertyCollection = clientPromise.collection("properties");

  const result = await propertyCollection
    .find()
    .sort({ available_from: -1 })
    .skip(0)
    .limit(6)
    .toArray();

  return NextResponse.json(result);
};
