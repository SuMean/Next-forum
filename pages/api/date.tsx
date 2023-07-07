export default function handler(요청: any, 응답: any) {
  let date = new Date();
  응답.status(200).json(date);
}
