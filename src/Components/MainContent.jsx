import React from "react";
import "../Css/MainContent.css";

function MainContent({ activeContent, menuItems }) {
  const content =
    menuItems.find((item) => item.name === activeContent)?.content ||
    "No Content Available";

  return (
    <main className="main">
      <header className="header">
        <h1>{activeContent}</h1>
      </header>
      <section className="content">
        <p>{content}</p>
      </section>
    </main>
  );
}

export default MainContent;
