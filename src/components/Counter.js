import React, { useState } from "react";

const Counter = () => {
  // State to hold the current number
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Function to decrease the count
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={count > 0 ? decreaseCount : null}
        style={{ fontSize: "30px" }}
      >
        Decrease
      </button>
      <span style={{ fontSize: "30px" }}> {count}</span>
      <button
        onClick={increaseCount}
        style={{ marginLeft: "10px", fontSize: "30px" }}
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
