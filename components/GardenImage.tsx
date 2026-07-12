export default function GardenImage() {
  return (
    <div className="garden-wrap" style={{ position: "relative", width: "100%" }}>
      <img
        src="/macscrendo2.jpg"
        alt=""
        style={{
          width: "100%",
          height: "auto",
          minHeight: "100vh",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  )
}
