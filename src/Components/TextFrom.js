import React, { useState } from 'react'

export default function TextFrom(props) { 
    const [text , setText] = useState("");
    const handleUpClick = () => {
        // console.log("uppercase to clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","sucess");
    };
    const handleLoClick = () => {
        // console.log("Lowercase to clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","sucess");
    };
    const handleClearClick = () => {
        // console.log("Claer to clicked" + text);
        let newText = '';
        setText(newText);
    };

    const handledOnChange= (Event) => {
        // console.log("on change");
        setText(Event.target.value);
    };
    
    
  return (
    <>
    <div className="container" style={{Color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handledOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-3" style={{Color: props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split("").length} words and {text.length} characters </p>
        <p>{0.008 * text.split("").length} minutes read</p>
        
    </div>
    </>
  )
}
