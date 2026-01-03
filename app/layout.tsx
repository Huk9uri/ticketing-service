import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header style={{ padding: 16, borderBottom: '1px solid #ddd' }}>
          <nav style={{ display: 'flex', gap: 16 }}>
            <Link href="/">공연 목록</Link>
            <Link href="/mypage">마이페이지</Link>
            <Link href="/login">로그인</Link>
          </nav>
        </header>

        <main style={{ padding: 24 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
