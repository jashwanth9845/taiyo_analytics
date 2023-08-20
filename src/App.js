import React from "react";
import { Provider } from "react-redux";
import Main from "./pages";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
