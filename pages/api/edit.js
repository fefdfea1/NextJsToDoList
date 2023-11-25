import { connectDB } from "@/utill/database";
export default async function Edit(req, res) {
  const client = await connectDB;
  const db = client.db("forum");
  if (req.method === "POST") {
    try {
      const edit = await db
        .collection("data")
        .updateOne(
          { id: Number(req.body.params) },
          { $set: { name: req.body.title } }
        );
      res.status(200);
    } catch (err) {
      console.log(err);
      res.status(400).json("에러발생");
    }
  }
}
