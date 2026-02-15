//import logo from "./logo.svg";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
//import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState("light");
  //const [text, setText] = useState("dark");
  const toggleMode = () => {
    if (darkmode === "dark") {
      setDarkMode("light");
    } else {
      setDarkMode("dark");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={darkmode}
        enableDarkMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
        {/*<About />*/}
      </div>
    </>
  );
}

export default App;
