// import React from 'react'
import { useState } from 'react'
const MultipleFormFeilds = () => {
 const [data, setData] = useState({ email: "", password: "" })
 const changeOfFields = (e) => {
  const { name, value } = e.target
  console.log(name, value);
  setData((fieldsValue) => ({ ...fieldsValue, [name]: value }))
 }
 // console.log(data);
 const clickHandle = (e) => {
  // e.preventDefault();
  alert(`Email is ${data.email} and password is ${data.password}`)
 }
 return (
  <>
   <form onSubmit={clickHandle}>
    <label htmlFor="">Email</label>
    <input type="email" name='email' id="" onChange={changeOfFields} />
    <br />
    <label htmlFor="">Password</label>
    <input type="password" name='password' id="" onChange={changeOfFields} />
    <br />
    <button type="submit">Submit</button>
   </form>
  </>
 )
}

export default MultipleFormFeilds