import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const CountContext = createContext();

function Index() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <App />
    </CountContext.Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
