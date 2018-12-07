import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./styles.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducer";

/** Apply the redux-thunk middleware and create a store object*/
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const rootElement = document.getElementById("root");
/** The store object is passed to the all child components using provider*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
