import { useState } from "react";
import { MouseEvent } from "react";
import React from "react";

function ListGroup() {
  const items = ["Home", "Apply", "About"];
  const [word, setWord] = useState("Click me");
  let selectedIndex = 0;
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <nav>
        <div style={{ display: "inline-block" }}>
          <img height="300" width="1400" src="../../image/about.png" alt="About" />
          <ul style={{display: "flex"}}>
            {items.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={handleClick}
                style={{ marginRight: "20px" }} // Add some space between items
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            style={{ height: "100px", width: "200px" }}
            onClick={() => setWord("Click me again")}
          >
            {word}
          </button>
        </div>
      </nav>
    </>
  );
}

export default ListGroup;
