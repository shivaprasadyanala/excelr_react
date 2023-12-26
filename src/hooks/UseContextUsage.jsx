import React, { createContext } from 'react'
import UseContextChild from './UseContextChild'
export const Greeting = createContext()
const UseContextUsage = () => {

 return (

  <Greeting.Provider value={"This from parent to child"}>
   <UseContextChild />
  </Greeting.Provider>
 )
}

export default UseContextUsage