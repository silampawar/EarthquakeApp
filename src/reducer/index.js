import { combineReducers } from "redux";
import { FETCH_EARTHQUAKEDATA } from "./../action/action_types";

export function fetchQuoteReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_EARTHQUAKEDATA: {
      return { ...state, data: action.payload };
    }

    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  earthQuakeData: fetchQuoteReducer
});

export default rootReducer;
