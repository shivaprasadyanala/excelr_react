import React from 'react'

const TextComponent = ({ text, isHovered }) => {
 return (
  <p style={{ fontFamily: isHovered ? 'cursive' : 'arial', fontSize: isHovered ? '50px' : '15px', marginLeft: isHovered ? '100px' : '0px' }} {...text}> some test</p>
 )
}

export default TextComponent