import * as reducer from "./../index";
import { FETCH_EARTHQUAKEDATA } from "./../../action/action_types";

test("Reducer with FETCH_EARTHQUAKEDATA type", () => {
  const action = {
    type: FETCH_EARTHQUAKEDATA,
    payload: "New Data"
  };
  expect(reducer.fetchQuoteReducer({}, action)).toEqual({ data: "New Data" });
});

test("Reducer with blank type", () => {
  const action = {
    type: "",
    payload: "New Data"
  };
  expect(reducer.fetchQuoteReducer({}, action)).toEqual({});
});

test("Reducer with existing state values", () => {
  const action = {
    type: FETCH_EARTHQUAKEDATA,
    payload: "New Data"
  };
  expect(
    reducer.fetchQuoteReducer({ Otherdata: "Quake Data" }, action)
  ).toEqual({ Otherdata: "Quake Data", data: "New Data" });
});
