import React, { memo } from 'react'

const Child2 = memo(({value, updateValue}) => {
    console.log("Child 2 rendered");
    
  return (
    <>
    <p>Child2 - {value}</p>
      <button onClick={updateValue}>update Child 2</button>
    </>
  )
});

export default Child2