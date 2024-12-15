import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

function App() {
  const [activeContent, setActiveContent] = useState("Home");

  const menuItems = [
    { name: "Home", content: "Welcome to the Home page!" },
    { name: "Profile", content: "This is your Profile page." },
    { name: "Settings", content: "Adjust your Settings here." },
    { name: "Logout", content: "You have logged out." },
  ];

  return (
    <div className="App">
      <div className="container">
        <Sidebar
          menuItems={menuItems}
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
        <MainContent activeContent={activeContent} menuItems={menuItems} />
      </div>
    </div>
  );
}

export default App;
