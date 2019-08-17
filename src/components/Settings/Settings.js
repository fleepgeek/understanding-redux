import React from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function Settings({ channelName, updateChannelName, user }) {
  return (
    <div
      className="settings"
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h3 className="section">Settings</h3>
      <Navbar channelName={channelName} user={user} />
      <div style={{ height: "100%" }}>
        <Content
          channelName={channelName}
          updateChannelName={updateChannelName}
        />
      </div>
      <Footer channelName={channelName} user={user} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    channelName: state.channelName
  };
};

const mapDispatchToProps = dispatch => ({
  updateChannelName: value =>
    dispatch({
      type: "UPDATE_CHANNEL_NAME",
      payload: { channelName: value }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
