'use client'

import { LanguageProvider } from "@/lib/LanguageContext";
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
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <img src="/logo2.png" alt="Screndo" style={{ height: "32px", width: "auto" }} />
        </div>

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
          Logga in
        </h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={fieldStyle}>
            <label style={labelStyle}>E-post</label>
            <input type="email" style={inputStyle} />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Lösenord</label>
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
            Logga in
          </button>
        </form>

        <p style={{ fontSize: "13px", color: "#6B6B6B", textAlign: "center", marginTop: "24px" }}>
          Har du inget konto? Kontakta oss.
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <LanguageProvider>
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        <Navbar />
        <LoginForm />
      </div>
    </LanguageProvider>
  );
}
