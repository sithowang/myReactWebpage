import React from "react";

function PageTwo() {
  const items = ["p1", "p2", "p3"];
  return (
    <>
      <nav>
        <img height="300" width="1400" src="../../image/about.png"></img>
        <ul className="list-group">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default PageTwo;