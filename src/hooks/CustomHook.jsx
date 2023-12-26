import React from 'react'
import UseFetch from './UseFetch';
const CustomHook = () => {
 const data = UseFetch("https://jsonplaceholder.typicode.com/users");
 return (
  <>
   {data.map((res) => {
    return (
     <div>
      <h1 key={res.id}>{res.id},{res.name}</h1>
     </div>
    )
   })
   }
  </>
 )
}

export default CustomHook