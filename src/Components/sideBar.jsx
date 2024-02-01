import React, { useState } from 'react';
import "../App.css";



const SideBar = ({ groups, activeGroupId, setActiveGroupId, setShowPopup,firstInitials,setShowNoteSide,isButtonClicked,setIsButtonClicked,setbtn }) => {
 
  return (
    <div className={`sidebar ${isButtonClicked ? 'flex-zero' : ' '}`}>
      <div className="upperSide">
        <div className="upperSideTop">
          <h2>Pocket Notes</h2>
          <div className="query-btn">
            {groups.map((group) => (
              <button key={group.id}  className={`group-button ${group.id === activeGroupId ? 'active' : ''}`} onClick={() => {setActiveGroupId(group.id);   setShowNoteSide(true); setIsButtonClicked(true); setbtn(false)  }}>
                <p style={{'--bgcolorintial':  group.color}}>{firstInitials(group.name)}</p><span>{group.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="lowerSide"></div>
      <button className="midbtn" onClick={() => setShowPopup(true)}>
        <span>+</span>
      </button>
    </div>
  );
};

export default SideBar;
