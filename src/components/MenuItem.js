import React from "react";

export default function MenuItem({ name, price, description, image }) {
  return (
    <div
      style={{
        background: "#FFF9F0",
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        textAlign: "center",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
      }}
    >
      {image && (
        <div style={{
          width: "100%",
          maxWidth: "140px",       // ✅ not too big on desktop
          margin: "0 auto 10px", 
          overflow: "hidden",
          borderRadius: "8px",
          marginBottom: "10px"
        }}>
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </div>
      )}
      <h4 style={{ margin: "0 0 6px", fontSize: "16px", color: "#6B4F4F" }}>{name}</h4>
      <p style={{ margin: "0 0 6px", fontSize: "14px", color: "#8B7D7D" }}>{description}</p>
      <strong style={{ color: "#D9B08C" }}>${price.toFixed(2)}</strong>
    </div>
  );
}
