import React from 'react'

const TextBoxComponent = ({ type, isHovered }) => {
 return (
  <>
   <button type={type} style={{ backgroundColor: isHovered ? 'blue' : 'yellow', borderRadius: isHovered ? '7px' : '0px', padding: isHovered ? '3px' : '0px', color: isHovered ? '#fff' : '#00000' }}>test button</button>
  </>
 )
}

export default TextBoxComponent