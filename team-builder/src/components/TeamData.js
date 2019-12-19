import React, { useState } from "react";

const TeamData = props => {
  // console.log("this is our props",props);
  const [note, setNote] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
    // setNote({ title: event.target.value, body: event.target.value });
    // console.log(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({ name: "", email: "", role:"" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        placeholder="name"
        value={note.name}
        onChange={handleChanges}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="text"
        placeholder="email"
        value={note.email}
        onChange={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <input
        name="role"
        placeholder="role"
        type="text"
        value={note.role}
        onChange={handleChanges}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default TeamData;