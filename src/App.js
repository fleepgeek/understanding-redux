import React from 'react';
import Screens from "./components/Screens";

function App() {
  const [channelName] = React.useState("Flying Hawk");

  return (
    <div className="app">
      <h3 className="section">App</h3>
      <h1>Channel: {channelName}</h1>
      <Screens />
    </div>
  );
}

export default App;
