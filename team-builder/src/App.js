import React, { useState }  from 'react';
import './App.css';
import Teams from "./components/Teams";
import TeamData from "./components/TeamData";

function App() {
  const [notes, setNotes] = useState([
    {
      name: "Adam Monast",
      email: "adammonast@gmail.com",
      role: "Web Developer"
    }
  ]);

  const addNewNote = note => {
    const newNote = {
      name: note.name,
      email: note.email,
      role: note.role
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <h1>Team Sign-Up!</h1>
      <TeamData addNewNote={addNewNote} />
      <Teams notes={notes} />
    </div>
  );
}

export default App;
