import React, {useState} from 'react'



function TextAnalyzer(props) {

  const [text , setText] = useState('')

  const handleClick = ()=>{
    let   newText = text.toUpperCase()
    setText (newText)
    props.showAlert("Converted to Uppercase!", "success")

  }
  const handleLowerClick = ()=>{
    let   newText = text.toLowerCase()
    setText (newText)
    props.showAlert("Converted to Lowercase!", "success")

  }

  const handleSpeak = ()=>{
    let speakMsg = new SpeechSynthesisUtterance()
    speakMsg.text = text
    window.speechSynthesis.speak(speakMsg)
    props.showAlert("This Gentleman speak all the text!", "success")

  }

  const handleCopy= ()=>{
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard you can paste now anywhere!", "success")

  }

  const handleClear=() =>{
    let newText = ''
    setText(newText)
    props.showAlert("Textbox is Cleared Now !", "success")
}

  const handleOnChange = (e)=>{
    setText(e.target.value)
  }


  return (
    <>
    <div className='container my-4'>
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading} - </h1>
        <div className="mb-3">
          <textarea  className='form-control' style={{backgroundColor: props.mode ==='dark'?'#212529':'white',color: props.mode === 'dark'?'white':'black' }} value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>
        </div>
        <button className='btn btn-primary m-2' onClick={handleClick}>Convert to Uppercase</button>
        <button className='btn btn-success m-2' onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className='btn btn-warning m-2' onClick={handleSpeak}>Speak</button>
        <button className='btn btn-info m-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-danger m-2' onClick={handleClear}>Clear Text</button>

    </div>

    <div className={`container text-${props.mode==='light'?'dark':'light'}`} >
      <h2 >Paragraph Summary : </h2>
      <p >{text.split(" ").length} Number of Words & {text.length} Number of Character</p>
      <p >{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to textbox above to preview here"}</p>
    </div>
    </>
  )
}

export default TextAnalyzer
