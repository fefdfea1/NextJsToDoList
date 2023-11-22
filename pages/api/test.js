import { connectDB } from "@/utill/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("data").find().toArray();
  const dataLength = result.length;
  console.log(dataLength);

  if (req.method === "POST") {
    db.collection("data").insertOne({
      name: req.body.input,
      id: dataLength + 1,
    });
    res.status(200).json(req.body.input + "추가");
  }
  if (req.method === "GET") {
    const NowDate = new Date();
    const hour = NowDate.getHours();
    const year = NowDate.getFullYear();
    const getMonth = NowDate.getMonth();
    const getDay = NowDate.getDate();
    res.status(200).json(`${year}/${getMonth + 1}/${getDay} 시간은:${hour}`);
  }
}
