import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { redirect } from "next/dist/server/api-utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    let 바꿀거 = { title: req.body.title, content: req.body.content };
    db.collection("post").updateOne(
      { _id: new ObjectId(req.body._id) },
      { $set: 바꿀거 }
    );
    res.redirect(302, "/list");
  }
}
