import React, { useState } from "react";

export default function EditPage({ onClose, onAddItem, menuData }) {
    const [item, setItem] = useState({
        category: "Coffee",
        name: "",
        price: "",
        description: "",
        image: ""
      });
      
    const handleChange = (e) => {
      const { name, value } = e.target;
      setItem(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = () => {
      if (!item.name || !item.price || !item.category) return;
      onAddItem(item.category, {
        name: item.name,
        price: parseFloat(item.price),
        description: item.description,
        image: item.image
      });
      setItem({ category: "Coffee", name: "", price: "", description: "" });
    };
  
    const handleDownload = () => {
      const dataStr = JSON.stringify(menuData, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = url;
      link.download = "menu-data.json";
      link.click();
  
      URL.revokeObjectURL(url);
    };
  
    return (
      <div style={{ padding: "30px", backgroundColor: "#FFF9F0", minHeight: "100vh" }}>
        <h2 style={{ color: "#6B4F4F" }}>🛠️ Edit Menu</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button onClick={onClose} style={btnStyle}>← Back</button>
          <button onClick={handleDownload} style={{ ...btnStyle, backgroundColor: "#6B8E23" }}>⬇️ Download JSON</button>
        </div>
  
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
          <select name="category" value={item.category} onChange={handleChange} style={inputStyle}>
            {["Coffee", "Thai tea", "Green tea", "Milk", "Cocoa", "Frappe", "Fruit Tea", "Toast", "Meal"].map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
  
          <input name="name" placeholder="Item Name" value={item.name} onChange={handleChange} style={inputStyle} />
          <input name="price" placeholder="Price" value={item.price} onChange={handleChange} style={inputStyle} />
          <input name="description" placeholder="Description" value={item.description} onChange={handleChange} style={inputStyle} />
          <input
                name="image"
                placeholder="Image filename"
                value={item.image}
                onChange={handleChange}
                style={inputStyle}
            />  
          <button onClick={handleSubmit} style={{ ...btnStyle, backgroundColor: "#D9B08C" }}>
            ➕ Add Item
          </button>
        </div>
      </div>
    );
  }
  
  const inputStyle = { padding: "8px", borderRadius: "6px" };
  const btnStyle = {
    padding: "10px",
    backgroundColor: "#8B7D7D",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
};
  