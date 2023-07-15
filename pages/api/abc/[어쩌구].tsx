export default function handler(요청: any, 응답: any) {
  console.log(요청.query);
  응답.status(200).json("처리완료");
}
