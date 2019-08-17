const initialState = { channelName: "Flying Hawk", user: { name: "john" } };

/*
    An action is an information you send to the reducer.
    This action must an object.
    The object must have a type property.
    An action can also have more optional properties
    {type: "UPDATE_CHANNEL_NAME", payload: {channelName: "Flying Dodo"}}

    1) Your component dispatches(sends) an action
    2) The reducer receives the action
    3) The reducer updates the store based on the action type and data(payload)
    4) The components connected to the store are updated
*/

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_CHANNEL_NAME") {
    return { ...state, channelName: action.payload.channelName };
  }
  return state;
};

export default reducer;
