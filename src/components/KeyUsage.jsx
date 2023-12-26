import React from 'react'
import dataObject from '../data.json'
import fs from 'fs';
const KeyUsage = ({ data }) => {
 const testdata = {
  "id": 3,
  "name": "temp3",
  "age": 45
 }
 const changeJson = () => {
  // fs.writeFile('../data.json', JSON.stringify(testdata), (err) => {
  //  if (err) console.log('Error writing file:', err);
  // })
  console.log("hello");
 }
 return (
  <>
   <div>
    <ul className='outercard'>
     {data.map((item) => {
      return (
       <li className='card'>
        <div key={item.id}>
         <h2>{item.name}</h2>
         <h2>{item.age}</h2>
        </div>
       </li>
      )
     })

     }
    </ul>


   </div>

   <button onClick={changeJson}>change json</button>

  </>
 )
}

export default KeyUsage