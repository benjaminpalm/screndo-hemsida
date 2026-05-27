const links = ["Product", "About", "Careers", "Privacy"];

export default function Footer() {
  return (
    <footer className="footer-bar">
      <img src="/logo.png" alt="Screndo" style={{ height: "28px", width: "auto" }} />

      <nav style={{ display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
        {links.map((link) => (
          <a
            key={link}
            href="#"
            style={{ color: "#6B6B6B", fontSize: "13px", textDecoration: "none" }}
          >
            {link}
          </a>
        ))}
      </nav>

      <span style={{ color: "#6B6B6B", fontSize: "13px" }}>© 2026 Screndo</span>
    </footer>
  );
}
