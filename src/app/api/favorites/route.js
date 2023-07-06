import { NextResponse } from "next/server";
import connectDb from "../connectDb";

export const GET = async (req) => {
  const client = await connectDb();

  const favoriteCollection = client.collection("favorites");

  const { searchParams } = new URL(req.url);

  const propertyId = searchParams.get("propertyId");
  const buyerEmail = searchParams.get("buyerEmail");

  const query = {
    propertyId,
    buyerEmail,
  };

  const result = await favoriteCollection.findOne(query);

  return NextResponse.json(result);
};

export const POST = async (req) => {
  const client = await connectDb();
  const favoriteCollection = client.collection("favorites");
  const reqData = await req.json();

  const query = {
    propertyId: reqData.propertyId,
    buyerEmail: reqData.buyerEmail,
  };

  const exist = await favoriteCollection.findOne(query);

  if (exist) {
    return NextResponse.json({ exist: true });
  }

  const result = await favoriteCollection.insertOne(reqData);

  return NextResponse.json(result);
};

export const DELETE = async (req) => {
  const client = await connectDb();

  const favoriteCollection = client.collection("favorites");

  const { searchParams } = new URL(req.url);

  const propertyId = searchParams.get("propertyId");
  const buyerEmail = searchParams.get("buyerEmail");

  const query = {
    propertyId: propertyId,
    buyerEmail: buyerEmail,
  };

  const result = await favoriteCollection.deleteOne(query);

  return NextResponse.json(result);
};
