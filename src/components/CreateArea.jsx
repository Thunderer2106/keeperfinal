import React, { useState } from "react";

function CreateArea(props) {
  const [inputtext, setinputtext] = useState({
    title: "",
    content: "",
    number: 0
  });
  function update(event) {
    const { name, value } = event.target;
    setinputtext((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  // function to change number
  function submit(event) {
    props.onadd(inputtext);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={inputtext.title}
          onChange={update}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputtext.content}
          onChange={update}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
