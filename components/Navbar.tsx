export default function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "64px",
        background: "#fff",
        borderBottom: "1px solid #ECECEC",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src="/logo.png" alt="Screndo" style={{ height: "28px", width: "auto" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <a
          href="#"
          style={{ color: "#6B6B6B", textDecoration: "none", fontSize: "15px" }}
        >
          Log in
        </a>
        <a
          href="#"
          style={{
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            fontSize: "15px",
            borderRadius: "100px",
            padding: "9px 20px",
            display: "inline-block",
          }}
        >
          Book an intro
        </a>
      </div>
    </nav>
  );
}
