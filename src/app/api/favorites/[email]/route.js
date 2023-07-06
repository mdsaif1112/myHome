import { NextResponse } from "next/server";
import connectDb from "../../connectDb";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const client = await connectDb();

  const favoriteCollection = client.collection("favorites");
  const propertyCollection = client.collection("properties");

  const email = params.email;

  const query = { buyerEmail: email };

  const result = await favoriteCollection.find(query).toArray();

  if (result.length) {
    const propertyIds = result.map((property) => property.propertyId);

    const realProperties = [];

    for (const id of propertyIds) {
      const realProperty = await propertyCollection.findOne({_id: new ObjectId(id)});

      if (realProperty) {
        realProperties.push(realProperty);
      }
    }

    return NextResponse.json(realProperties);
  }

  return NextResponse.json([]);
};
