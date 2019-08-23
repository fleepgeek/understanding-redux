import React from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import { updateChannelName } from "../../state/channel/actions";

function Settings({ channelName, onUpdateChannelName, user, onFetchUser }) {
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
          updateChannelName={onUpdateChannelName}
        />
      </div>
      <Footer channelName={channelName} user={user} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    channelName: state.channel.channelName,
    user: state.user.user
  };
};

// const mapDispatchToProps = dispatch => ({
//   updateChannelName: value =>
//     dispatch({
//       type: "UPDATE_CHANNEL_NAME",
//       payload: { channelName: value }
//     }),
//   fetchUser: () => dispatch({ type: "FETCH_USER" })
// });

export default connect(
  mapStateToProps,
  {
    onUpdateChannelName: updateChannelName
  }
)(Settings);
