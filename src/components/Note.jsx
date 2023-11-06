import React from "react";

function Note(props) {
  // function handleClick() {
  //   props.onDelete(props.id);
  // }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.number}</p>
      <button
        onClick={() => {
          props.del(props.id);
        }}
      >
        DELETE
      </button>
      <button
        onClick={() => {
          props.adn(props.id);
        }}
      >
        ADD
      </button>
      {/* <button onClick={handleClick}>DELETE</button> */}
    </div>
  );
}

export default Note;
