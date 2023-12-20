import React from 'react'
import { useForm } from 'react-hook-form'
const FormHookUsage = () => {
 const { register, handleSubmit, formState: { errors } } = useForm()
 const formSubmit = (data) => {
  alert(data.userName + " " + data.password)
 }
 return (
  <>
   <form onSubmit={handleSubmit(formSubmit)}>
    <label htmlFor="">Username</label>
    <input type="text" name="userName" {...register("userName", { required: true })} id="" /><br />
    {errors.userName && <p>username is required</p>}
    <label htmlFor="">password</label>
    <input type="password" {...register("password", { required: true })} name="password" id="" />
    {errors.password && <p>Password is required</p>}
    <button type="submit">submit</button>
   </form>
  </>
 )
}

export default FormHookUsage