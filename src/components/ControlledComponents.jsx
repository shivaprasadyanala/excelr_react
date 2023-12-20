import { useState } from 'react'

import React from 'react'

const ControlledComponents = () => {
 const [value, setValue] = useState('');
 return (
  <form>
   <label htmlFor="">Name</label>
   <input type="text" onChange={(e) => { setValue(e.target.value) }} />
   <p>{value}</p>
  </form>
 )
}

export default ControlledComponents