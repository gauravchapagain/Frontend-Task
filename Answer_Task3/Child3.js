import React, { useContext } from "react";
import { CountContext } from "./index";

function Child3() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h3>Child 3 Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Child3;
