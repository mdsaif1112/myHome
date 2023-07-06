import { NextResponse } from "next/server";
import connectDb from "../connectDb";

export const GET = async () => {
  const clientPromise = await connectDb();

  const propertyCollection = clientPromise.collection("properties");

  const query = { listed_in: "Rent" || "rent" };

  const result = await propertyCollection
    .find(query)
    .sort({ available_from: -1 })
    .skip(0)
    .limit(6)
    .toArray();

  return NextResponse.json(result);
};
