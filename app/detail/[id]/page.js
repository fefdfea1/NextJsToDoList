import { connectDB } from "@/utill/database";
export default async function page(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("data")
    .findOne({ id: Number(props.params.id) });
  return <div>이것은{result.name}</div>;
}
