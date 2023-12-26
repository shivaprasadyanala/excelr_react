import React from 'react'
import { useState } from 'react'
const FetchUsage = () => {
 const [postData, setPostData] = useState({
  title: "my book",
  body: "It is good content"
 })
 const [putData, setPutData] = useState({
  title: "my book",
  body: "It is good content"
 })
 const [data, setData] = useState()
 const createPost = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts", {
   method: "POST",
   headers: {
    'content-type': 'application/json'
   },
   body: JSON.stringify(postData)
  })
  const data = await response.json();
  setData(data)
  console.log(data);
 }
 const putPost = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts/32", {
   method: "PUT",
   headers: {
    'content-type': 'application/json'
   },
   body: JSON.stringify(putData)
  })
  const data = await response.json();
  setData(data)
  console.log(data);
 }
 const getData = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts/32", {
   method: "GET",
   headers: {
    'content-type': 'application/json'
   }
  })
  const data = await response.json();
  setData(data)
  console.log(data);
 }
 const deletePost = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts/32", {
   method: "DELETE",
   headers: {
    'content-type': 'application/json'
   }
  })
  const data = await response.json();
  setData(data)
  console.log(data);
 }
 return (
  <>
   <label htmlFor="" >title</label>
   <input type="text" onChange={(e) => setPostData(prevState => ({ ...prevState, title: e.target.value }))} /><br />
   <label htmlFor="">body</label>
   <input type="text" onChange={(e) => setPostData(prevState => ({ ...prevState, body: e.target.value }))} /><br />
   {data &&
    <div>
     <h1>The title of book is: {data.title}</h1>
     <h1>The body of book is:{data.body}</h1>
    </div>}
   <button onClick={createPost}>createPost</button>
   <button onClick={putPost}>putData</button>
   <button onClick={deletePost}>deleteData</button>
   <button onClick={getData}>getData</button>
  </>
 )
}

export default FetchUsage;