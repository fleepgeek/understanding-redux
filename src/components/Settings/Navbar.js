import React from "react";

function Navbar({channelName, user}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#dfdfdf" }}>
      <h2>{channelName}</h2>
      {user && <p>Welcome {user.name}</p>}
    </div>
  );
}

export default Navbar;
