import React, { useState } from "react";

export default function TextForm(props) {
  const isDisabled = (text) => {
    return text.length===0;
  }
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
    navigator.clipboard.writeText(text);
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
    return text.split(/\s+/).filter((e)=>e.length!==0).length
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
            style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'? 'white': 'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} disabled={isDisabled(text)}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} disabled={isDisabled(text)}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick} disabled={isDisabled(text)}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick} disabled={isDisabled(text)}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} disabled={isDisabled(text)}>
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
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}
