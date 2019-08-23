import * as actionTypes from "./actionTypes";

const initialState = { user: null, error: null };

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

/*
  Pure Function
  1) Must return the same output on the same input
  2) Must not have side effects (network call, write to file, logging to screen)
  3) Should not mutate external state
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload.user };
    case actionTypes.FETCH_USER_FAILED:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default reducer;
