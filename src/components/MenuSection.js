import React, { useState } from "react";
import MenuItem from "./MenuItem";

export default function MenuSection({ title, items, editMode, onAddItem }) {
  const [newItem, setNewItem] = useState({ name: "", price: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!newItem.name || !newItem.price) return;
    onAddItem(newItem);
    setNewItem({ name: "", price: "", description: "" });
  };

  return (
    <div style={{ 
      background: '#FAF3E0',
      padding: '25px',
      borderRadius: '16px',
      marginBottom: '40px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
    }}>
      <div style={{
        background: '#FFE9C9',
        padding: '15px 25px',
        borderRadius: '12px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#6B4F4F',
          margin: 0,
          fontSize: '22px',
          letterSpacing: '0.5px'
        }}>
          {title}
        </h2>
      </div>

      {editMode && (
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          marginBottom: '20px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input
            name="name"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Item Name"
            style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <input
            name="price"
            value={newItem.price}
            onChange={handleChange}
            placeholder="Price"
            style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc", width: "80px" }}
          />
          <input
            name="description"
            value={newItem.description}
            onChange={handleChange}
            placeholder="Description"
            style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc", flex: "1" }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: "8px 12px",
              background: "#D9B08C",
              border: "none",
              color: "#fff",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Add
          </button>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '20px'
      }}>
        {items.map((item) => (
          <MenuItem 
            key={item.name + item.price}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
}
