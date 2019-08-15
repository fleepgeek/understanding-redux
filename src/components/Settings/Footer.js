import React from "react";

function Footer(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#dfdfdf" }}>
      <p>You are in: (channel name)</p>
      {props.user && <p>Logged in as: {props.user.name}</p>}
    </div>
  );
}

export default Footer;
