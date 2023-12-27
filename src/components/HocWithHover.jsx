import { func } from 'prop-types'
import React from 'react'
import { useState } from 'react'
const HocWithHover = (WrappedComponent) => {
 const [hovered, setHovered] = useState(false);
 return function (props) {
  const handleMouseEnterEvent = () => {
   setHovered(true)
  }
  const handleMouseLeaveEvent = () => {
   setHovered(false)
  }
  return (
   <>
    <div onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent}>
     <WrappedComponent {...props} isHovered={hovered} />
    </div>
   </>
  )
 }
}


export default HocWithHover