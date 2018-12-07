import * as action from "./../index";

test("Should make a call to the dispatch", () => {
  const dispatch = jest.fn();
  dispatch(action.fetchEarthQuakeData());

  expect(dispatch.mock.calls.length).toBe(1);
});
