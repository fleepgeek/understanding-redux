import React from "react";

function Footer({channelName, user}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#dfdfdf" }}>
      <p>You are in: {channelName}</p>
      {user && <p>Logged in as: {user.name}</p>}
    </div>
  );
}

export default Footer;
