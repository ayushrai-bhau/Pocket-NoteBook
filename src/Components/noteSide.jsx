import React from "react";
import sendSvg from "../assets/Vector (5).png";
const noteSide = ({ activeGroupId, groups,newNote,setNewNote,handleAddNote,firstInitials,selectedColor }) => {

  const activeGroup = activeGroupId ? groups.find((group) => group.id === activeGroupId) : null;
  return (

    <>
      {" "}
      <div className="main">
        <header style={activeGroup ? { '--bgcolorintial': selectedColor } : {}}>
        <p>{activeGroup && firstInitials(activeGroup.name)}</p>
        {activeGroup && activeGroup.name}
        </header>
        <div className="notes">
          <div className="note ">
            {activeGroupId &&
              groups
                .find((group) => group.id === activeGroupId)
                .notes.map((note, index) => (
                  <p className="txt"  key={index}>
                    {note}
                  </p>
                ))}
          </div>
        </div>
        <div className="notefooter">
          <div className="input">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              type="text"
              placeholder="Enter your text here..........."
              rows="4"
              cols="50"
            
            />
             
           
            <button onClick={handleAddNote} className="send">
              <img src={sendSvg} alt="send-logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default noteSide;
