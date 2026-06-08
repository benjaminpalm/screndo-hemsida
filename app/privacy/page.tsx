import Navbar from "@/components/Navbar";

const sections = [
  {
    title: "What we collect",
    text: "We collect the information you provide when booking an intro: name, work email, company name, job title, and company size.",
  },
  {
    title: "Why we collect it",
    text: "We use this information solely to contact you about Screndo and prepare for our introductory meeting. We do not sell or share your data with third parties.",
  },
  {
    title: "How long we keep it",
    text: "We retain your information for as long as necessary to maintain our business relationship. You can request deletion at any time.",
  },
  {
    title: "Your rights",
    text: "Under GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at hello@screndo.com.",
  },
  {
    title: "Contact",
    text: "Screndo, hello@screndo.com",
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "80px 24px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-1px", margin: "0 0 8px 0", color: "#000" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "13px", color: "#aaa", margin: "0 0 56px 0" }}>Last updated: June 2026</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#000", margin: "0 0 8px 0" }}>{s.title}</h2>
                <p style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
