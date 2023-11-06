import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [values, setvalues] = useState([]);
  function addnote(input) {
    setvalues((prevval) => {
      return [...prevval, input];
    });
    console.log(values);
  }
  function delnote(id) {
    setvalues((preval) => {
      return values.filter((item, index) => {
        return index !== id;
      });
    });

    console.log("hi");
  }
  function addnum(id) {
    const items = [...values];
    items[id] = { ...items[id], number: items[id].number + 1 };

    setvalues(items);
  }
  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {values.map((item, index) => {
        return (
          <Note
            key={index}
            title={item.title}
            content={item.content}
            number={item.number}
            id={index}
            del={delnote}
            adn={addnum}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
