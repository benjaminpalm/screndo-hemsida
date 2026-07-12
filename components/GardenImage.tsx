export default function GardenImage() {
  return (
    <div className="garden-wrap" style={{ position: "relative", width: "100%", height: "100vh" }}>
      <img
        src="/macscrendo2.jpg"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  )
}
