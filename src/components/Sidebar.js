import React from "react";

export default function Sidebar({ activeCategory, setActiveCategory }) {
  const categories = [
    { name: "Coffee", icon: "☕" },
    { name: "Thai tea", icon: "🧋" },
    { name: "Green tea", icon: "🍵" },
    { name: "Milk", icon: "🥛" },
    { name: "Cocoa", icon: "🍫" },
    { name: "Frappe", icon: "❄️" },
    { name: "Fruit Tea", icon: "🍓" },
    { name: "Toast", icon: "🍞" },
    { name: "Meal", icon: "🍽️" },
  ];

  return (
    <div style={{
      width: "120px",
      background: "#F5E6CA",
      padding: "20px 15px",
      borderRadius: "8px",
      marginRight: "20px"
    }}>
      <h3 style={{ color: "#8B7D7D", marginTop: 0, marginBottom: "25px", textAlign: "center" }}>
        Categories
      </h3>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        {categories.map((category) => {
          const isActive = activeCategory === category.name;
          return (
            <div
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                padding: "10px 0",
                borderRadius: "8px",
                backgroundColor: isActive ? "#E2F0CB" : "transparent",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#FFF9F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}>
                {category.icon}
              </div>
              <span style={{ color: "#6B4F4F", fontSize: "14px" }}>
                {category.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
