import { NextResponse } from "next/server";
import connectDb from "../connectDb";

export const POST = async (req) => {
  const data = await req.json();

  const client = await connectDb();
  const userCollection = client.collection("users");

  const query = { email: data.email };

  const exist = await userCollection.findOne(data);

  if (exist) {
    return NextResponse.json({ exist: true });
  }

  const result = await userCollection.insertOne(data);

  return NextResponse.json(result);
};
