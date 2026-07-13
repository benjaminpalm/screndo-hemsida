'use client'

import { useLanguage } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "100px",
  border: "1px solid #ECECEC",
  padding: "14px 20px",
  fontSize: "15px",
  background: "#F8F7F4",
  boxSizing: "border-box",
  outline: "none",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#0A0A0A",
  marginBottom: "6px",
  display: "block",
};

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
};

function LoginForm() {
  const { t } = useLanguage()

  return (
    <div
      className="login-outer"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      <div className="login-inner" style={{ maxWidth: "400px", width: "100%" }}>
        <h1
          className="login-h1"
          style={{
            fontWeight: 700,
            fontSize: "28px",
            letterSpacing: "-1px",
            textAlign: "center",
            margin: "0 0 32px 0",
          }}
        >
          {t.loginHeadline}
        </h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={fieldStyle}>
            <label style={labelStyle}>{t.emailLabel}</label>
            <input type="email" style={inputStyle} />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>{t.passwordLabel}</label>
            <input type="password" style={inputStyle} />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#04D8B5",
              color: "#0A0A0A",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              marginTop: "8px",
            }}
          >
            {t.loginButton}
          </button>
        </form>

        <p style={{ fontSize: "13px", color: "#6B6B6B", textAlign: "center", marginTop: "24px" }}>
          {t.noAccount}
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <LoginForm />
    </div>
  );
}
