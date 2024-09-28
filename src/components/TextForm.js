import React, { useState, useRef } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const textAreaRef = useRef(null); // Ref for the textarea

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("converted to lower case", "success")
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("converted to Uper case", "success");

  };

  const handleClearClick = () => {
    setText(""); // Clear the text to an empty string
    props.showAlert("Clear the text to an empty string", "success");
    

  };

  const handleCopyClick = async () => {
    if (textAreaRef.current) {
      try {
        await navigator.clipboard.writeText(textAreaRef.current.value);
        alert('Text copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  const handleRemoveExtraSpacesClick = () => {
    const trimmedText = text.replace(/\s+/g, " ").trim(); // Remove extra spaces
    setText(trimmedText);
    props.showAlert("Extra spaces removed", "success");

  };

  return (
    <dive style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <div className='container'>
        <h1 className='mb-2'>{props.heading}</h1>


        <div className="mb-3">


          <textarea
            className="form-control"
            ref={textAreaRef}
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            id="MyBox"
            rows="5"
            style={{
              backgroundColor: props.mode === 'light' ? '	white' : '#13466e', // Light grey for light mode, grey for dark mode
              color: props.mode === 'light' ? 'black' : 'white', // Black text for light mode, white for dark mode

            }}>
          </textarea>
        </div>
        {/* Button Lists */}
        <div>
          {/* Button Lists */}
          <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
        </div>

      </div>
      {/* Text Summary */}
      <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter(Boolean).length} words, and {text.length} characters</p>
        <p>{(0.008 * text.split(" ").filter(Boolean).length).toFixed(2)} Minutes Required to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </dive>
  );
}
