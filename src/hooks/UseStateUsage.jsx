import React, { useEffect } from 'react'
const { useState } = require('react')
const UseStateUsage = () => {
 const [counter, setCounter] = useState(0);
 // const [data, setData] = useState([])
 const [name, setName] = useState("");

 useEffect(() => {
  document.getElementById("test").innerHTML = "this is to test the use effect with " + counter
 }, [counter])

 // useEffect(() => {
 //  document.title = counter
 // }, [])

 useEffect(() => {
  document.title = counter
 })

 return (
  <>
   <label htmlFor="">name</label>
   <input type="text" onChange={(e) => { setName(e.target.value) }} />
   <h1>{name.toUpperCase()}</h1>
   <h2>{name} from useeffect hook</h2>
   <p id='test'></p>
   <button onClick={() => { setCounter(counter + 5) }}>+</button>
   <button onClick={() => { setCounter(counter - 2) }}>-</button>
  </>
 )
}

export default UseStateUsage