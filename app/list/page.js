import "./page.css";
import { connectDB } from "@/utill/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
export default async function page() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("data").find().toArray();
  return (
    <div className="list-bg">
      {result.map((item, index) => (
        <div className="list-item">
          <Link href={`/detail/${index + 1}`}>
            <h4>{item.name}</h4>
            <p>이히힝</p>
          </Link>
          <DetailLink />
        </div>
      ))}
    </div>
  );
}
