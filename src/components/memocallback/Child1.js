import React, { memo } from "react";

const Child1 = memo(({ value, updateValue }) => {
  console.log("Child 1 rendered");
  return (
    <div>
      <p>Child1 - {value}</p>
      <button onClick={updateValue}>update Child 1</button>
    </div>
  );
});

export default Child1;
