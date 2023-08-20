import { MongoClient } from "mongodb";
import { config } from "dotenv";
declare const global: any;
config();
const url = process.env.MONGO_URL;
if (!url) {
  throw new Error("MONGO_URL is not defined in the environment variables.");
}

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
