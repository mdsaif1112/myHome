import { NextResponse } from "next/server";
import mongodb from "../connectDb";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page"));
  const limit = parseInt(searchParams.get("limit"));

  const clientPromise = await mongodb();

  const propertyCollection = clientPromise.collection("properties");

  const result = await propertyCollection
    .find()
    // .limit(limit * page)
    .toArray();

  return NextResponse.json(result);
};
