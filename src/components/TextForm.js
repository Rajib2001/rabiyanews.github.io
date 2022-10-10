import React ,{useState} from 'react';
export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log('uppercase was clicked '+  text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','success')
    }
    const handleLowClick=()=>{
        // console.log('uppercase was clicked '+  text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase','success')
    }
    const handleClearClick=()=>{
        // console.log('uppercase was clicked '+  text);
        let newText="";
        setText(newText);
        props.showAlert('Text has been deleted','success')
    }

    const handleOnchange=(event)=>{
        // console.log('on changed');
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    return (
        <>
        

        <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                
                <textarea className="form-control" onChange={handleOnchange}style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}value={text}placeholder="Enter text here" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Delete text</button>

        </div>
        <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element!==0}).length} minutes will take to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter some text above Textbox to preview it..'}</p>

        </div>
        </>
    )
}   
