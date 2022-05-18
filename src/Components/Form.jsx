import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "New",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    let data;
    if (!localStorage.getItem("trello")) {
      data = [];
    } else data = JSON.parse(localStorage.getItem("trello"));

    data.push(form);

    localStorage.setItem("trello", JSON.stringify(data));
  };
  return (
    <div>
      <input type="text" name="title" onChange={handleChange} />

      <textarea
        name="description"
        cols="30"
        rows="10"
        onChange={handleChange}
      ></textarea>

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
