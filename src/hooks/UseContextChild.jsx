import React, { useContext } from 'react'
import { Greeting } from './UseContextUsage';

const UseContextChild = () => {
 const greetings = useContext(Greeting)
 return (
  <div>The value from parent is: {greetings}</div>
 )
}

export default UseContextChild;