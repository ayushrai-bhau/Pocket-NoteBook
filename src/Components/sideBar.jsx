import React, { useState } from 'react';
import "../App.css";
import Delete from "../assets/delete.png";



const SideBar = ({ groups, activeGroupId, setActiveGroupId, setShowPopup,firstInitials,setShowNoteSide,isButtonClicked,setIsButtonClicked,setbtn,handleDeleteGroup }) => {
 
  return (
    <div className={`sidebar ${isButtonClicked ? 'flex-zero' : ' '}`}>
      <div className="upperSide">
        <div className="upperSideTop">
          <h2>Pocket Notes</h2>
          <div className="query-btn">
            {groups.map((group) => (
              <div className='grp-btn-img' key={group.id}>
              <div   className={`group-button ${group.id === activeGroupId ? 'active' : ''}`} onClick={() => {setActiveGroupId(group.id);   setShowNoteSide(true); setIsButtonClicked(true); setbtn(false)  }}>
                <p style={{'--bgcolorintial':  group.color}}>{firstInitials(group.name)}</p><span>{group.name}</span>
              </div>
              <span  className='delete-btn' onClick={()=>handleDeleteGroup(group.id)}><img src={Delete} alt=''  width={"6%"} /></span>
              </div>
            ))}
          </div>
        </div>
          <button className='midbtn' onClick={() => {setShowPopup(true);}}>
        <span>+</span>
      </button>
    </div>
      </div>
     
    
  );
};

export default SideBar;
