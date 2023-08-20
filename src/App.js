import React from "react";
import { Provider } from "react-redux";
import Main from "./pages";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter
        basename={
          process.env.NODE_ENV == "development" ? "/" : "/taiyo_analytics"
        }
      >
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
