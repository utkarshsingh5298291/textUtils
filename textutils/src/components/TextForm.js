import React,{useState} from 'react';


export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleDownClick=()=>{
        console.log("LowerCase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearText=()=>{
        console.log("Clear the typing space" + text);
        let newText=" ";
        setText(newText);
        props.showAlert("Cleared text","success");
    }
    //challenge

    const speak = (props) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      
      const FirstLetterCaps = (props) => {

        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword);
        
      };

     
    const handleOnChange=(event)=>{
        console.log("Uppercase was clicked");
        setText(event.target.value);
    }

    const[text,setText]=useState("Enter text here:")
    return (
     
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
         
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea type="text" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#071330':'white',color:props.mode==='dark'?'white':'black' }} id="myBox" rows="8"/>
                    <div id="text" className="form-text"></div>
                </div>           
            <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={speak}>Read the text</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={FirstLetterCaps}>Replace 1st letter</button>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length-1} words,{text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read a word</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Please enter something to Preview"}</p>
            </div>

            
        </div>
        </>
    );
}

