import React from "react";
import { CustomRouter } from "./router";
import { Provider } from "react-redux";
import store from "../store";

const StoreProvider = () => {
  return (
    <Provider store={store}>
      <CustomRouter />
    </Provider>
  );
};

export default StoreProvider;
