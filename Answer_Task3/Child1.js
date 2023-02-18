import React, { useContext } from "react";
import { CountContext } from "./index";

function Child1() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h3>Child 1 Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Child1;
