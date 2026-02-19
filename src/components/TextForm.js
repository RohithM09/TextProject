import React, { useState } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text.toUpperCase());
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("converted to upper case", "success");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    showAlert("converted to lower case", "success");
  };

  const handle = () => {
    let newtext = " ";
    setText(newtext);
  };

  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };

  const capitalize = () => {
    let newtext = text[0].toUpperCase();
    setText(newtext + text.slice(1));
  };

  const [text, setText] = useState("");
  //text = "new text";

  return (
    <>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: mode === "dark" ? "grey" : "white",
              color: mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to toLowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={capitalize}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-2" onClick={handle}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
