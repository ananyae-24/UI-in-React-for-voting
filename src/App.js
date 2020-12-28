import React from "react";
import classes from "./App.module.css";
import Layout from "./containers/Layout/Layout";
import { Provider } from "react-redux";
import { createStore } from "redux";
import candidate from "./redux/Candidate";
const store = createStore(candidate);
function App() {
  return (
    <Provider store={store}>
      <Layout className={classes.App} />
    </Provider>
  );
}

export default App;
