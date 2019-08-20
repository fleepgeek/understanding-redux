import React from "react";
import { connect } from "react-redux";
import Screens from "./components/Screens";

function App({ channelName }) {
  return (
    <div className="app">
      <h3 className="section">App</h3>
      <h1>Channel: {channelName}</h1>
      <Screens />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    channelName: state.channelName
  };
};

export default connect(mapStateToProps)(App);
