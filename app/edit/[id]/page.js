import { connectDB } from "@/utill/database";
export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("data")
    .findOne({ id: Number(props.params.id) });
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/edit" method="POST">
        <input name="title" />
        <input type="hidden" value={props.params.id} name="params" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
