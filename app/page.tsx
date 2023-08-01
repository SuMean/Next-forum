import { connectDB } from "../util/database";

export const metadata = {
  title: " next-forum",
  description: "게시판입니다",
};


export default async function Home() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  // console.log(result);
  return <div>메인페이지</div>;
}
