//import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      // document.title = "TextUtils - Light Mode";
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
      //document.title = "TextUtils - Dark Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={darkmode}
          enableDarkMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={darkmode} />} />

            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"
                  mode={darkmode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
