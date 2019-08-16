import React from "react"

import Settings from "./Settings/Settings";

function Screens({channelName, updateChannelName, user}) {
  return (
    <div className="screens">
      <h3 className="section">Screens</h3>
      <Settings 
        channelName={channelName} 
        updateChannelName={updateChannelName}
        user={user} />
    </div>
  )
}

export default Screens;