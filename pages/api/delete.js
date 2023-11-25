import { connectDB } from "@/utill/database";

export default async function Delete(req, res) {
  const client = await connectDB;
  const db = client.db("forum");
  const parseData = JSON.parse(req.body);
  if (req.method === "DELETE") {
    let result = await db.collection("data").deleteOne({ id: parseData.id });
    res.status(200).json("성공");
  }
}
