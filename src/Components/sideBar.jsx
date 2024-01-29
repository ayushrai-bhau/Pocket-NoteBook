import React from 'react';
import "../App.css";



const SideBar = ({ groups, activeGroupId, setActiveGroupId, setshowPopup,firstInitials,selectedColor,setShowNoteSide }) => {
  return (
    <div className="sidebar">
      <div className="upperSide">
        <div className="upperSideTop">
          <h2>Pocket Notes</h2>
          <div className="query-btn">
            {groups.map((group) => (
              <button key={group.id} className={group.id === activeGroupId ? 'active' : ''} onClick={() => {setActiveGroupId(group.id);   setShowNoteSide(true)}}>
                <p style={{'--bgcolorintial': selectedColor}}>{firstInitials(group.name)}</p><span>{group.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="lowerSide"></div>
      <button className="midbtn" onClick={() => setshowPopup(true)}>
        <span>+</span>
      </button>
    </div>
  );
};

export default SideBar;
