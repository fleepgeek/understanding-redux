import { UPDATE_CHANNEL_NAME } from "./actionTypes";

export const updateChannelName = channelName => {
  return { type: UPDATE_CHANNEL_NAME, payload: { channelName } };
};
