import Image from "next/image";

export default function PhoneMockups() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "96px 48px 120px",
        marginBottom: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
          position: "relative",
        }}
      >
        {/* Left phone */}
        <div
          style={{
            transform: "rotate(-8deg) translateY(40px)",
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          <Image
            src="/phone-left.png"
            alt=""
            width={280}
            height={600}
            style={{
              maxHeight: "600px",
              width: "auto",
              borderRadius: "36px",
              border: "5px solid black",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              display: "block",
            }}
          />
        </div>

        {/* Center phone */}
        <div
          style={{
            transform: "scale(1.05)",
            zIndex: 3,
            flexShrink: 0,
            marginLeft: "-24px",
            marginRight: "-24px",
          }}
        >
          <Image
            src="/phone-center.png"
            alt=""
            width={280}
            height={600}
            style={{
              maxHeight: "600px",
              width: "auto",
              borderRadius: "36px",
              border: "5px solid black",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              display: "block",
            }}
          />
        </div>

        {/* Right phone */}
        <div
          style={{
            transform: "rotate(8deg) translateY(40px)",
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          <Image
            src="/phone-right.png"
            alt=""
            width={280}
            height={600}
            style={{
              maxHeight: "600px",
              width: "auto",
              borderRadius: "36px",
              border: "5px solid black",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
