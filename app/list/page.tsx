import { connectDB } from "@/util/database";

export default async function List() {
  let db = (await connectDB).db("forum");
  let data = await db.collection("post").find().toArray();
  console.log(data);

  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>{data[0].title}</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
      <div className="list-item">
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
    </div>
  );
}
