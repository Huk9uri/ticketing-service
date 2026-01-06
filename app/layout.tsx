// app/layout.tsx (일부 예시)
import "./globals.css";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ko">
      <body>
        <header style={{ padding: 16, borderBottom: "1px solid #ddd" }}>
          <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="/">공연 목록</Link>
            <Link href="/mypage">마이페이지</Link>

            {session ? (
              <Link href="/api/auth/signout?callbackUrl=/">로그아웃</Link>
            ) : (
              <Link href="/login">로그인</Link>
            )}
          </nav>
        </header>

        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}
