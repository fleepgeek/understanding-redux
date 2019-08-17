import React from "react";
import { connect } from "react-redux";
import Screens from "./components/Screens";

function App({ channelName, username }) {
  return (
    <div className="app">
      <h3 className="section">App</h3>
      <h1>Channel: {channelName}</h1>
      <h3>Username: {username}</h3>
      <Screens />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    channelName: state.channelName,
    username: state.user.name
  };
};

export default connect(mapStateToProps)(App);
