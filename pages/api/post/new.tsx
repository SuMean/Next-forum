import { connectDB } from "@/util/database";

export default async function handler(요청: any, 응답: any) {
  if (요청.method == "POST") {
    console.log(요청.body);
    응답.redirect(302, "/list");
  }
}
