import { NextResponse } from "next/server";
import mongodb from "../connectDb";

export const GET = async () => {
  const clientPromise = await mongodb();

  const propertyCollection = clientPromise.collection("properties");

  const result = await propertyCollection.find().toArray();

  return NextResponse.json(result);
};
