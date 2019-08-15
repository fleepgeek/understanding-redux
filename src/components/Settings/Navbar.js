import React from "react";

function Navbar(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#dfdfdf" }}>
      <h2>(channel name)</h2>
      {props.user && <p>Welcome {props.user.name}</p>}
    </div>
  );
}

export default Navbar;
