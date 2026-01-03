export default function HomePage() {
  return (
    <>
      <h1>공연 목록</h1>

      <ul style={{ marginTop: 16 }}>
        <li>
          <a href="/performances/1">🎵 콘서트 A</a>
        </li>
        <li>
          <a href="/performances/2">🎤 콘서트 B</a>
        </li>
      </ul>
    </>
  );
}
