import React from "react";

function Content({channelName, updateChannelName}) {
  return (
    <div style={{ display: "flex", height: "200px" }}>
      <Sidebar />
      <Main channelName={channelName} updateChannelName={updateChannelName} />
    </div>
  );
}

function Main({channelName, updateChannelName}) {
  return (
    <div style={{ backgroundColor: "#fff", flex: "1", padding: "10px" }}>
      <label htmlFor="channelName">Change Channel Name: </label>
      <input 
        type="text" 
        name="channelName" 
        id="channelName" 
        value={channelName}
        onChange={(e) => updateChannelName(e.target.value)} />
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
