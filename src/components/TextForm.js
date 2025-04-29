import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let upCaseText = text.toUpperCase();
    setText(upCaseText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let loCaseText = text.toLowerCase();
    setText(loCaseText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const countWords = (text)=> {
    if(text.trim().length>0){
      let newText = text.split(/[ ]+/);
      let textWithoutExtraSpaces=newText.join(" ")
      return textWithoutExtraSpaces.trim().split(" ").length
    }
    else{
      return 0;
    }
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'? 'white': 'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h2>Your text summary</h2>
        <p>
          <b>{countWords(text)}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * countWords(text)}</b> Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Write in above text box to preview it here"}</p>
      </div>
    </>
  );
}
