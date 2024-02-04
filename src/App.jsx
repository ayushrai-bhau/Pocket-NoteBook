import { useEffect, useState } from "react";
import SideBar from "./Components/sideBar";
import NoteSide from "./Components/noteSide";
import Popup from './Components/popup'
import NoteHome from './Components/home/noteHome'
import "./App.css";


function App() {
  
  
  const [groups, setGroups] = useState(() => {
    const storedGroups = localStorage.getItem("groups");
    return storedGroups ? JSON.parse(storedGroups) : [];});
    
    const [activeGroupId, setActiveGroupId] = useState(null);
   
  const [showPopup, setShowPopup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newNote, setNewNote] = useState('');
  const [selectedColor, setSelectedColor] = useState('#B38BFA');
  const [showNoteSide, setShowNoteSide] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [btn,setbtn]=useState('false')
  

  
 
 
  useEffect(() => {
    const storedGroups = localStorage.getItem("groups");
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const handleAddGroup = () => {
    if (newGroupName.trim() !== '') {
      const newGroup = {
        id: Date.now(),
        name: newGroupName,
        color: selectedColor,
        notes: [],
      };
      setGroups([...groups, newGroup]);
      setNewGroupName('');
      setShowPopup(false);
    }
  };
  const firstInitials = (string) => {
    const words = string?.split(" ");
    let initials = "";
    words.forEach(word => {
      if (word) {
        initials += word[0].toUpperCase();
      }
    });
    return initials;
  };
  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const currentDateTime = new Date().toISOString(); // Get current date and time in ISO format
      const updatedGroups = groups.map((group) => {
        if (group.id === activeGroupId) {
          return {
            ...group,
            notes: [...group.notes, { note: newNote, dateTime: currentDateTime }],
          };
        }
        return group;
      });
      setGroups(updatedGroups);
      setNewNote('');
    }
  };
  const handleTextareaKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      
      e.preventDefault();
      handleAddGroup()
    }
  }


  
  return (
    <div className="App">
     
     <SideBar
      groups={groups}
      activeGroupId={activeGroupId}
      setActiveGroupId={setActiveGroupId}
      setShowPopup={setShowPopup}
      firstInitials={firstInitials}
      selectedColor={selectedColor}
      setShowNoteSide={setShowNoteSide}
      isButtonClicked={isButtonClicked}
      setIsButtonClicked={setIsButtonClicked}
      setbtn={setbtn}
    
      />   
           <Popup
      show={showPopup}
      onClose={setShowPopup}
      newGroupName={newGroupName}
      setNewGroupName={setNewGroupName}
      handleAddGroup={handleAddGroup}
      handleTextareaKeyDown={handleTextareaKeyDown}
 

      setSelectedColor={setSelectedColor}
    />
      
      {showNoteSide ? (
        <NoteSide
          activeGroupId={activeGroupId}
          groups={groups}
          newNote={newNote}
          setNewNote={setNewNote}
          handleAddNote={handleAddNote}
          setActiveGroupId={setActiveGroupId}
          firstInitials={firstInitials}
          selectedColor={selectedColor}
          setIsButtonClicked={setIsButtonClicked}
          btn={btn}
          setbtn={setbtn}
          handleTextareaKeyDown={handleTextareaKeyDown}
    
        />
      ) : (
        <NoteHome />
      )}
    
    
    </div>
  );
}

export default App;
