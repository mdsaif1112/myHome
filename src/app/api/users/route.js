import { NextResponse } from "next/server";
import connectDb from "../connectDb";
import { useSearchParams } from "next/navigation";

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

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const client = await connectDb();
  const userCollection = client.collection("users");

  const email = searchParams.get("email");

  const query = { email: email };

  const user = await userCollection.findOne(query);

  if (!user) {
    return NextResponse.json({ userType: "buyer" });
  }

  const userType = user.userType;

  return NextResponse.json({ userType });
};
