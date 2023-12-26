// import { element } from 'prop-types';
import React, { useState, useRef, useEffect } from 'react'

const UseRefUsage = () => {
 const [name, setName] = useState(0);
 const count = useRef(0);
 const element = useRef();
 useEffect(() => {
  count.current = count.current + 1;
  // setName((n) => n + 1)
 })

 return (
  <>
   <label htmlFor="">Name</label>
   <input type="text" onChange={(e) => { setName(e.target.value) }} name="" id="" />
   <p ref={element}>Name:{name}</p>
   <h1>Renders:{count.current}</h1>
   <button onClick={() => { element.current.style.fontSize = "100px" }}>change size</button >
  </>
 )
}

export default UseRefUsage