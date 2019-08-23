import * as actionTypes from "./actionTypes";

const initialState = { channelName: "Flying Hawk" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CHANNEL_NAME:
      return { ...state, channelName: action.payload.channelName };
    default:
      return state;
  }
};

export default reducer;
