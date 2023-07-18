import { connectDB } from "@/util/database";
export default async function handler(요청: any, 응답: any) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  응답.status(200).json(result);
}
