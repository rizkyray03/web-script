import React from "react";
import "../Css/Sidebar.css";

function Sidebar({ menuItems, activeContent, setActiveContent }) {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActiveContent(item.name)}
            className={activeContent === item.name ? "active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
