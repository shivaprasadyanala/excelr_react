import React, { useEffect } from 'react'
import { useState } from 'react'
const UseFetch = (url) => {
 const [response, setResponse] = useState([])

 useEffect(() => {
  fetch(url)
   .then((res) => res.json())
   .then(data => setResponse(data))
 })
 console.log(response);
 return response
}

export default UseFetch