import React from "react";

import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function Settings({channelName, updateChannelName, user}) {
  return (
    <div
      className="settings"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 className="section">Settings</h3>
      <Navbar channelName={channelName} user={user} />
      <div style={{height: "100%" }}>
        <Content channelName={channelName} updateChannelName={updateChannelName} />
      </div>
      <Footer channelName={channelName} user={user} />
    </div>
  );
}

export default Settings;
