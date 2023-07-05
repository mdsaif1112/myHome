import React from "react";
const { MongoClient, ServerApiVersion } = require("mongodb");

// /**
//  * @type {import ("mongodb").Db}
//  */

let clientPromise;

const connectDb = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    clientPromise = client.db("myHome");
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    return clientPromise;
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;