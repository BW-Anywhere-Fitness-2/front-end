import React, { useState } from "react";

export default function AddClass(props) {
  const [newClass, setNewClass] = useState({
    id: "",
    name: "",
    type: "",
  });

  const handleChanges = (e) => {
    setNewClass({
      ...newClass,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addClass(newClass);
    setNewClass({
      id: "",
      class: "",
      type: "",
    });
  };

  return (
    <>
      <input
        type="text"
        name="Id"
        value={newClass.id}
        onChange={handleChanges}
        placeholder="class id"
      />
      <input
        type="text"
        name="name"
        value={newClass.class_name}
        onChange={handleChanges}
        placeholder="class name"
      />
      <input
        type="text"
        name="type"
        value={newClass.class_type}
        onChange={handleChanges}
        placeholder="class type"
      />
      <button className="button" onClick={handleSubmit}>
        Add Class
      </button>
    </>
  );
}
