import React, {useState} from 'react'

export default function TextForm(props) {

    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('');
    //text="text2";    Wrong Way
    //setText("Text2");    Right Way
    
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleUPclick = ()=>{
        // console.log("Upper Case Was Clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Changed To Upper Case","success");
    }

    const handleUPclickk = ()=>{
        // console.log("Lower Case Was Clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Changed To Lower Case","success");
    }

    const handleUPclickkk = ()=>{
        // console.log("Lower Case Was Clicked" + text);
        let newtext='';
        setText(newtext);
        props.showAlert("Text Cleared","success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }

    const handleExtraSpaces = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(""));
       props.showAlert("Extra Spaces Removed","success");
    }



  return (
    <>
    <div className="Container" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
           <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey':'white' , color:props.mode === 'dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUPclick}>Convert To Upper Case</button>
          <button className="btn btn-primary mx-2" onClick={handleUPclickk}>Convert To Lower Case</button>
          <button className="btn btn-primary mx-2" onClick={handleUPclickkk}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words , {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length} Minutes Required To Read Word </p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter Some Text To Preview It"}</p>
    </div>
    </>
  )
}
