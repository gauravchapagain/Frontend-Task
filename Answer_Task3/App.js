import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import { CountContext } from "./index";

function App() {
  return (
    <div>
      <h2>App Component</h2>
      <CountContext.Provider>
        <Child1 />
        <Child2 />
        <Child3 />
      </CountContext.Provider>
    </div>
  );
}

export default App;
