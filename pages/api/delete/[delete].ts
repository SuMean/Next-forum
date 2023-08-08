import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   const postId = req.query._id as string;
  if (postId) {
    let session = await getServerSession(req, res, authOptions);

    let db = (await connectDB).db("forum");
    let find = await db
      .collection("post")
      .findOne({ _id: new ObjectId(postId) });
    if (session?.user?.email === find?.author) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(postId) });
      console.log(result);
      res.status(200).json("삭제완료");
    }
  }
}
