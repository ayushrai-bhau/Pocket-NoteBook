import React from 'react'

const colorItem = ({selectedColor , handleColorChange}) => {
  return (
    <div className='color-item'  value={selectedColor} onChange={(e) => handleColorChange(e.target.value)} style={{'--bgcolorintial': selectedColor}}></div>
  )
}

export default colorItem