//import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
//import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  //const [text, setText] = useState("dark");
  const toggleMode = () => {
    if (darkmode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode activated", "success");
      document.title = "TextUtils - Light Mode";
      // setInterval(() => {
      // document.title = "TextUtils is Amazing Mode";
      //}, 1500);
      //setInterval(() => {
      // document.title = "TextUtils-Now";
      //}, 2000);
    } else {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode activated", "success");
      document.title = "TextUtils - Dark Mode";
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
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={darkmode}
        />
        {/*<About />*/}
      </div>
    </>
  );
}

export default App;
