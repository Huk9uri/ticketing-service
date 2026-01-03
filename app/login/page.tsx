export default function LoginPage() {
    return (
      <>
        <h1>로그인</h1>
  
        <form style={{ marginTop: 16 }}>
          <div>
            <input placeholder="이메일" />
          </div>
          <div style={{ marginTop: 8 }}>
            <input type="password" placeholder="비밀번호" />
          </div>
          <button style={{ marginTop: 12 }}>로그인</button>
        </form>
      </>
    );
  }
  