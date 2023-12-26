import React from 'react'
import { useState, useMemo } from 'react'
const UseMemoUsage = () => {
 const [value, setValue] = useState(0)
 const [counter, setCounter] = useState(0)
 const sqValue = (num) => {
  return Math.cbrt(num) + Math.sqrt(num);
 }
 const sqOfNum = useMemo(() => {
  return sqValue(counter)
 }, [counter])
 return (
  <>
   <div>UseMemoUsage</div>
   <h3>square + cube root value:{sqOfNum}</h3>
   <h4>counter:{counter}</h4>
   <button onClick={() => setCounter(counter + 1)}>increment</button>
   <button onClick={() => setCounter(counter - 1)}>decrement</button>
  </>
 )
}

export default UseMemoUsage