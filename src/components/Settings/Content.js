import React from "react";

function Content(props) {
  return (
    <div style={{ display: "flex", height: "200px" }}>
      <Sidebar />
      <Main />
    </div>
  );
}

function Main(props) {
  return (
    <div style={{ backgroundColor: "#fff", flex: "1", padding: "10px" }}>
      <label htmlFor="channelName">Change Channel Name: </label>
      <input type="text" name="channelName" id="channelName" value="(channel name)" />
    </div>
  );
}

function Sidebar() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", width: "120px" }}>
      <h2>Sidebar</h2>
    </div>
  );
}


export default Content;
