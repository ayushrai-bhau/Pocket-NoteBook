import { useEffect, useState } from "react";
import SideBar from "./Components/sideBar";
import NoteSide from "./Components/noteSide";
import Popup from './Components/popup'
import NoteHome from './Components/home/noteHome'
import "./App.css";


function App() {
  
  const colors =['#B38BFA',' #FF79F2', '#43E6FC','#F19576','#0047FF','#6691FF' ]
  const [groups, setGroups] = useState(() => {
    const storedGroups = localStorage.getItem("groups");
    return storedGroups ? JSON.parse(storedGroups) : [];});
  const [activeGroupId, setActiveGroupId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newNote, setNewNote] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [showNoteSide, setShowNoteSide] = useState(false);
  


  const setTheme = (color) =>{
    document.documentElement.style.setProperty('--bgcolorintial',color)
  }

  const setColor =(event)=>{
    const currentColor = event.target.style.getPropertyValue('--bgcolorintial')
    setTheme(currentColor)

    console.log(currentColor)
  }
 
  const handleColorChange = () => {
    setSelectedColor(setColor());
  };
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
      const updatedGroups = groups.map((group) => {
        if (group.id === activeGroupId) {
          return {
            ...group,
            notes: [...group.notes, newNote],
          };
        }
        return group;
      });
      setGroups(updatedGroups);
      setNewNote('');
    }
  };

  
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
      />
           <Popup
      show={showPopup}
      onClose={setShowPopup}
      newGroupName={newGroupName}
      setNewGroupName={setNewGroupName}
      handleAddGroup={handleAddGroup}
      colors={colors}
      selectedColor={selectedColor}
      handleColorChange={handleColorChange}
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
        />
      ) : (
        <NoteHome />
      )}
    
    
    </div>
  );
}

export default App;
