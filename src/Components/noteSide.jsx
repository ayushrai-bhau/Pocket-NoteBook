import React, { useEffect, useState } from "react";
import sendSvg from "../assets/Vector (5).png";
import BackSvg from "../assets/Vector.png";

const noteSide = ({ activeGroupId, groups,newNote,setNewNote,handleAddNote,firstInitials,setIsButtonClicked,btn,setbtn,handleTextareaKeyDown }) => {

 
  const [currentGroup, setCurrentGroup] = useState(null);

  useEffect(() => {
    if (activeGroupId) {
      const group = groups.find((group) => group.id === activeGroupId);
      setCurrentGroup(group);
    } else {
      setCurrentGroup(null);
    }
  }, [activeGroupId, groups]);


  const bgColorStyle = currentGroup ? { "--bgcolorintial": currentGroup.color } : {};

  

const handleButtonClick=()=>{
  setIsButtonClicked(false)
  setbtn(true)
}

  
  return (
<>
    <div className={`main ${btn ? "flex-zero" : " "}`}>
        <header style={bgColorStyle}>
          <button onClick={handleButtonClick}>
            <img src={BackSvg} alt="back" />
          </button>
          <p>{currentGroup && firstInitials(currentGroup.name)}</p>
          {currentGroup && currentGroup.name}
        </header>
        <div className="notes">
          <div className="note ">
            {currentGroup &&
              currentGroup.notes.map((note, index) => (
                <p className="txt" key={index}>
                  {note.note}
                </p>
              ))}
          </div>
        </div>
        <div className="notefooter">
          <div className="input">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyDown={handleTextareaKeyDown}
   
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
