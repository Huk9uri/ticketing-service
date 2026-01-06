import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function MyPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <section>
      <h1>마이페이지</h1>
      <p>안녕하세요, {session.user?.name} 님</p>
      <p>이메일: {session.user?.email}</p>
    </section>
  );
}
