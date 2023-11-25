export default function handler(req, res) {
  res.status(200).json("성공");
  console.log(req.query);
}
