import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ");
    newText = newText.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UPPERCASE!","info")
  };

  const handleLowClick = () => {
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ");
    newText = newText.toLowerCase();
    setText(newText);
    props.showAlert("Converted To lowercase!","info")
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared!","warning")
  };

  const handleOnChange = (event, props) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1 style={{ color: props.mode === "dark" ? "#f8f9fa" : "#343a40" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "light" ? "grey" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert To UPPERCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}
        
        >
          Convert To lowercase
        </button>
        <button className="btn btn-danger mx-3" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container m-3">
        <h1 style={{ color: props.mode === "dark" ? "#f8f9fa" : "#343a40" }}>
          Your Text Summary
        </h1>
        <p style={{ color: props.mode === "dark" ? "#f8f9fa" : "#343a40" }}>
          Text has {text.split(" ").length} words and has {text.length}{" "}
          alphabets and it takes {0.008 * text.split(" ").length} minutes to
          read it.
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Text Area",
};
