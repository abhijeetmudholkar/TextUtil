import React, { useState } from 'react'; // Import useState separately
import PropTypes from "prop-types";

export default function TextForm(props) {
    const [text, setText] = useState("Enter Value Here"); // Call useState as a function
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted into uppercase!","success");
    }
    const handlelwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted into lowercase!","success");

    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("text cleared!","success");

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange =()=>{
        // eslint-disable-next-line no-restricted-globals
        setText(event.target.value)
    }


    

    return (
        <>
        <div className='container'style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'  }} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mt-3 mx-2' onClick={handleupClick}>Convert to uppercase</button>
            <button className='btn btn-primary mt-3 mx-2' onClick={handlelwClick}>Convert to lowercase</button>
            <button className='btn btn-primary mt-3 mx-2' onClick={clearText}>Clear Text</button>
            <button className='btn btn-primary mt-3 mx-2' onClick={speak}>Read In Audio</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <div className="container">
        <p>{text}</p>
        </div>
        </div>
        
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
