// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError("로그인에 실패했습니다.");
    }
  }

  return (
    <section style={{ maxWidth: 420 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>로그인</h1>

      {error && <p style={{ color: "red", marginBottom: 12 }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          이메일
          <input name="email" placeholder="test@test.com" required />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          비밀번호
          <input name="password" type="password" placeholder="1234" required />
        </label>

        <button type="submit" style={{ padding: 12, border: "1px solid #ddd" }}>
          로그인
        </button>
      </form>

      <p style={{ marginTop: 12, color: "#666" }}>
        테스트 계정: test@test.com / 1234
      </p>
    </section>
  );
}
