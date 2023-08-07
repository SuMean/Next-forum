import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(요청: any, 응답: any) {
  if (요청.query) {
    let session = await getServerSession(요청, 응답, authOptions);

    let db = (await connectDB).db("forum");
    let find = await db
      .collection("post")
      .findOne({ _id: new ObjectId(요청.query) });
    if (session?.user?.email === find?.author) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(요청.query) });
      console.log(result);
      응답.status(200).json("삭제완료");
    }
  }
}
