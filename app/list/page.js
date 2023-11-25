import "./page.css";
import { connectDB } from "@/utill/database";
import ListItem from "./ListItem";
export default async function page() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("data").find().toArray();
  return (
    <div>
      <ListItem result={result} />
    </div>
  );
}
