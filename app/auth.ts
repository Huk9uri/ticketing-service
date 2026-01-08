// auth.ts - NextAuth v4 설정
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "이메일", type: "text" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) return null;

        // ✅ TODO: 나중에 DB 조회 + bcrypt 비교로 교체
        if (email === "test@test.com" && password === "1234") {
          return {
            id: "u_1",
            name: "테스트유저",
            email,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // 최초 로그인 시 user가 들어옴 → token에 심어둔다
      if (user) {
        token.userId = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // 클라이언트에서 session.user로 접근 가능하게 매핑
      if (session.user) {
        (session.user as any).id = token.userId;
        (session.user as any).name = token.name;
        (session.user as any).email = token.email;
      }
      return session;
    },
  },
};
