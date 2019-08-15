import React from "react";

import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function Settings(props) {
  return (
    <div
      className="settings"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 className="section">Settings</h3>
      <Navbar />
      <div style={{ flex: "1", height: "100%" }}>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Settings;
