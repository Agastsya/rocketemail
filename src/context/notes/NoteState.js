import NoteContext from "./NoteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [descId, setDescId] = useState(null);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);

  const toggleSidebar = () => {
    setSidebar(true);
  };
  const changeDescription = (id) => {
    setDescId(id);
  };
  const changeName = (name, date) => {
    setName(name);
    setDate(date);
  };
  return (
    <NoteContext.Provider
      value={{
        sidebar,
        toggleSidebar,
        descId,
        changeDescription,
        changeName,
        name,
        date,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
