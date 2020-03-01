import * as types from "../actions/actionTypes";
import intialState from "./intialState";

export default function courseReducer(state = intialState.courses, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
