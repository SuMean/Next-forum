import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.query.id as string) })
    .toArray();
  res.status(200).json(result);
}
