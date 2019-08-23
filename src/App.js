import React from "react";
import { connect } from "react-redux";

import Screens from "./components/Screens";
import { fetchUser } from "./state/user/actions";

function App({ channelName, onFetchUser }) {
  React.useEffect(() => {
    onFetchUser();
  }, [onFetchUser]);

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
    channelName: state.channel.channelName
  };
};

/*
  If you wont be making use of any state in a component,
  pass null as the first argument if you need mapDispatchToProps:
  connect(null, mapDispatchToProps)
*/
export default connect(
  mapStateToProps,
  { onFetchUser: fetchUser }
)(App);
