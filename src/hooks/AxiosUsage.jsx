import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
const AxiosUsage = () => {

  const [name, setName] = useState([])

  //get request
  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then((res) => setName(name.data));

  }, [])
  const [post, setPost] = useState();
  const [dpost, setDPost] = useState();
  //post request
  const postCreation = (() => {
    axios.post('http://jsonplaceholder.typicode.com/posts', {
      body: 'for test',
      title: "just a little title"
    }).then((res) => { setPost(res.data) })

  })
  // update request
  const postUpdate = (() => {
    axios.put('http://jsonplaceholder.typicode.com/posts/1', {
      body: 'the post updated',
      title: "the updated title"
    }).then((res) => { setPost(res.data) })
  })

  //delete request
  const postDelete = (() => {
    axios.delete('http://jsonplaceholder.typicode.com/posts/1').then((res) => { setDPost("post got deleted") })
  })
  console.log(post);
  return (
    <>
      {post &&
        <>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
          <h1>{dpost}</h1>
        </>
      }
      <button onClick={postCreation}>post creation</button>
      <button onClick={postUpdate}>post update</button>
      <button onClick={postDelete}>post delete</button>
    </>
  )
}

export default AxiosUsage