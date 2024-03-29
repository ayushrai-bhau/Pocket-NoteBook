import React from "react";
import ColorItem from "./colorItem";
import "../App.css";


const popup = ({
  show,
  onClose,
  newGroupName,
  setNewGroupName,
  handleAddGroup,
  setSelectedColor,
  handleTextareaKeyDown,
}) => {
  return (
    <div>
      {show && (
        <div className="popup-back">
          <div className="popup">
            <div className="popup-content">
              <h3>Create New group</h3>
              <div className="group-name">
                <span>Group Name</span>
                <input
                  type="text"
                  value={newGroupName}
                  onKeyDown={handleTextareaKeyDown}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="New Group Name"
                  required
                />
              </div>
              <div className="color-list">
                <span>Choose color</span>

                <ColorItem
                  setSelectedColor={setSelectedColor}
                 
                />
              </div>
              <button onClick={handleAddGroup} className="add-chats">
                Create
              </button>
              <button onClick={() => onClose(false)} className="cancel">
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default popup;
