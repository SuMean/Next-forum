
import { MongoClient } from "mongodb";
import { connectDB } from "../util/database";

export default async function Home() {
  let client: MongoClient = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();
  console.log(result)
  return <div>게시판이다!!</div>;
}
