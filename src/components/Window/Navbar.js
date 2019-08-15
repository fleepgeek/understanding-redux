import React from "react";

function Navbar(props) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{props.title}</h2>
            {props.user && <p>Welcome {props.user.name}</p>}
        </div>
    );
}

export default Navbar;
