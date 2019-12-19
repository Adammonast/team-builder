import React from "react";

const Teams = props => {
  return (
    <div className="note-list">
      {props.notes.map(note => (
        <div className="note" key={note.id}>
          <p>{note.name}</p>
          <p>{note.email}</p>
          <p>{note.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;
