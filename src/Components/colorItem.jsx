import React from 'react'

const colorItem = ({setSelectedColor,handleTextareaKeyDown}) => {
  const colors =['#B38BFA',' #FF79F2', '#43E6FC','#F19576','#0047FF','#6691FF' ]
  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bgcolorintial', color);
  };

  const setColor = (color) => {
    setSelectedColor(color);
    setTheme(color);
    console.log(color);
  };
  return (
    <div className='color-list-item'>
      {colors.map((color,id)=><div key={id} className='color-item'  onKeyDown={handleTextareaKeyDown} onClick={() => setColor(color)} style={{'--bgcolorintial': color}}></div>)}

    </div>
  )
}

export default colorItem