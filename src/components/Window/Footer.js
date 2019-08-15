import React from "react";

function Footer(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>You are in: {props.title}</p>
      {props.user && <p>Logged in as: {props.user.name}</p>}
    </div>
  );
}

export default Footer;
