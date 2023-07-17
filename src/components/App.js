import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const [isVisible, setIsVisible] = useState(false);

  function handleVisible(){
    setIsVisible(true);
  }

  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={handleVisible}>Click Me</button>
      <p id="para" className={isVisible? "show": "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
}

export default App
