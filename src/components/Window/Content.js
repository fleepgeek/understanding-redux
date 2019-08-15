import React from "react";

function Content(props) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Main title={props.title} updateTitle={props.updateTitle} />
    </div>
  );
}

function Sidebar() {
  return <h2>Sidebar</h2>;
}

function Main(props) {
  return (
    <div>
      <label htmlFor="title">Change title</label>
      <input type="text" name="title" id="title" value={props.title} onChange={(e) => props.updateTitle(e.target.value)} />
    </div>
  );
}

export default Content;
