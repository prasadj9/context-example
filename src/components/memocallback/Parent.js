import React, { useCallback, useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [parent, setParent] = useState(0);
    const [child1, setChild1] = useState(0);
    const [child2, setChild2] = useState(0);
    
    console.log("parent rendered");
    const updateParent = () => {
        setParent(Math.floor(Math.random() * 100) + 1);
    }
    const updateChild1 = useCallback(() => {
        setChild1(Math.floor(Math.random() * 100) + 1);
    }, [])
    const updateChild2 = useCallback(() => {
        setChild2(Math.floor(Math.random() * 100) + 1);
    }, []);
  return (
    <>
    <div>Parent -{parent} </div>
    <button onClick={updateParent}>update</button>
    {/* <button onClick={updateChild1}>update Child 1</button> */}
    {/* <button onClick={updateChild2}>update child 2</button> */}
    <Child1 value={child1} updateValue={updateChild1}/>
    <Child2 value={child2} updateValue={updateChild2}/>
    </>
  )
}

export default Parent


/*
memo is an higher order component that you can import from react library and 
used to memorize a component along with the props passed to that component.

Just remember one concept if you don’t know, “whenever a state of parent component get’s 
updated all it’s child components get’s rendered along side that parent component”

Child1 has child1 state and when we update that Child2 is also rendering and same with child2 as well. 
to prevent this we can use memo.

React.memo prevents the Child component from re-rendering unless its props (onClick or data) change.
useCallback memoizes the onClick handler, ensuring it doesn’t get re-created on every render.

When to Use Each:
React.memo: Use when you have a component that re-renders unnecessarily due to unchanged props.
useMemo: Use when you need to avoid expensive re-calculations of values that depend on props or state.
useCallback: Use when you need to avoid unnecessary re-creations of functions that are passed as props


React.memo
React.memo is a higher-order component (HOC) that can be used to memoize a functional component. 
This means React will only re-render the component when its props change. 

useCallback
useCallback is a hook that returns a memoized version of a function. It is used to avoid unnecessary 
re-creations of functions, which can cause unnecessary re-renders when passed as props to child components.

useMemo is a hook that memoizes the result of a function. 
It is used to avoid recalculating expensive calculations on every render.
*/