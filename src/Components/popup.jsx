import React from 'react'
import ColorItem from './colorItem'
import '../App.css'

const popup = ({show ,onClose ,newGroupName,setNewGroupName,handleAddGroup, colors ,handleColorChange}) => {
    



    
  return (
    <div>{show && (
        <div  className='popup-back'>
        <div className="popup">
          <div className="popup-content">
            <h3>Create New group</h3>
            <div><span>Group Name</span>
            <input type="text" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} placeholder="New Group Name" />
            </div>
            <div  className='color-list'><span>Choose color</span>
           
            {colors.map((selectedColor,id)=><ColorItem key={id} selectedColor={selectedColor} handleColorChange={handleColorChange} />)}
            </div>
            <button onClick={handleAddGroup} className='add-chats' >Create</button>
            <button onClick={() => onClose(false)} className='cancel'>X</button>
      
          </div>
        </div>
        </div>
      )}</div>
  )
}

export default popup