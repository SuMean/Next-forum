import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { redirect } from "next/dist/server/api-utils";

export default async function handler(요청: any, 응답: any) {
  if (요청.method == "POST") {
    let db = (await connectDB).db("forum");
    let 바꿀거 = { title: 요청.body.title, content: 요청.body.content };
    let result = db
      .collection("post")
      .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: 바꿀거 });
    응답.redirect(302, "/list");
  }
}
