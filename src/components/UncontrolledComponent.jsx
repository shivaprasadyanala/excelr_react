import React, { lazy, useRef } from 'react'


const UncontrolledComponent = () => {
 const inputValue = useRef(null)
 return (
  <>
   <label htmlFor="">username</label>
   <input ref={inputValue} type="text" name="" id="" />
   <button type='submit' onClick={(e) => { console.log(inputValue.current.value); }}>click here</button>
   <p>{inputValue.current}</p>
  </>
 )
}

export default UncontrolledComponent