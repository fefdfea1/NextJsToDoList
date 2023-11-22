export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/test" method="post">
        <input type="text" placeholder="입력해주세요" name="input" />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
