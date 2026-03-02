const blobBase: React.CSSProperties = {
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
  userSelect: "none",
  zIndex: 0,
};

export default function BlobBackground() {
  return (
    <>
      <div style={{ ...blobBase, top: "-200px", left: "-150px", width: "800px", height: "800px", background: "radial-gradient(circle at center, rgba(196,98,45,0.45) 0%, rgba(196,98,45,0.20) 35%, rgba(196,98,45,0.05) 60%, transparent 75%)", filter: "blur(80px)", animation: "bgBlob1 24s ease-in-out infinite alternate" }} />
      <div style={{ ...blobBase, bottom: "-120px", right: "-100px", width: "650px", height: "650px", background: "radial-gradient(circle at center, rgba(139,67,19,0.40) 0%, rgba(139,67,19,0.15) 40%, transparent 70%)", filter: "blur(90px)", animation: "bgBlob2 30s ease-in-out infinite alternate-reverse" }} />
      <div style={{ ...blobBase, top: "30%", left: "40%", width: "450px", height: "450px", background: "radial-gradient(circle at center, rgba(196,98,45,0.30) 0%, rgba(44,24,16,0.10) 50%, transparent 72%)", filter: "blur(70px)", animation: "bgBlob3 20s ease-in-out infinite alternate" }} />
    </>
  );
}
