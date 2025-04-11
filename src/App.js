import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MenuSection from "./components/MenuSection";
import EditPage from "./components/EditPage";
import "./style.css";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const [showEdit, setShowEdit] = useState(false);
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    fetch("/menu-data.json")
      .then(res => res.json())
      .then(data => setMenuData(data));
  }, []);

  const addItem = (category, item) => {
    setMenuData(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), item]
    }));
  };

  return (
    <div style={{ fontFamily: 'Helvetica', backgroundColor: '#FFF9F0', padding: '20px', minHeight: '100vh' }}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <button
          onClick={() => setShowEdit(prev => !prev)}
          style={{
            padding: "8px 14px",
            backgroundColor: showEdit ? "#8B7D7D" : "#D9B08C",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          {showEdit ? "← Back to Menu" : "Edit Menu"}
        </button>
      </div>

      {showEdit ? (
        <EditPage
          onClose={() => setShowEdit(false)}
          onAddItem={addItem}
          menuData={menuData}
        />
      ) : (
        <div style={{ display: 'flex' }}>
          <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          <div style={{ flex: 1 }}>
            <Header />
            {menuData[activeCategory] && (
              <MenuSection title={activeCategory} items={menuData[activeCategory]} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
