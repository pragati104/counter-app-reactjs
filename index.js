import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <h1 id="title">This is a counter App made using reactjs</h1>
);

const Body = () => {
  let [count, setcount] = useState(0);

  const Increment = () => {
    setcount(count + 1);
  };
  const Decrement = () => {
    setcount(count - 1);
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <button className="btn btn1" onClick={Increment}>
        Increment
      </button>
      <button className="btn btn2" onClick={Decrement}>
        Decrement
      </button>
    </div>
  );
};

const Applayout = () => (
  <div>
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
