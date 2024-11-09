import React, {useState} from 'react'

export default function Textarea(textArea) {
  const [text, setText] = useState('your text here');
  const myStyle = textArea.mode === 'light'?
  {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black'
  }
  :
  {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white'
  }
  
  const toUpCase=() => {
    let newText = text.toUpperCase();
    setText(newText)
    textArea.showAlert('success','Converted to upper case')
    console.log(text.split(' '))
  }
  const toLoCase=() => {
    let newText = text.toLowerCase();
    setText(newText)
    textArea.showAlert('success','Converted to lower case')
  }
  const toClear=() => {
    let newText = ""
    setText(newText)
    textArea.showAlert('success','Text cleared')
  }
  const toReverse=() => {
    let newText = text.split(" ").reverse().join(" ")
    setText(newText)
    textArea.showAlert('success','Sentence reversed')
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  

  return (
    < >
    <div className="container" style={myStyle} >
        <label htmlFor="Textarea" className="form-label">
          <h3>{textArea.heading}</h3></label>
        <textarea className="form-control" id="Textarea" rows="10" value={text} onChange={handleOnChange} style={myStyle} ></textarea>
        <button className="btn btn-primary mx-1 my-2" onClick={toUpCase} >convert to upper case</button>
        <button className="btn btn-primary mx-1 my-2" onClick={toLoCase} >convert to lower case</button>
        <button className="btn btn-primary mx-1 my-2" onClick={toClear} >Clear</button>
        <button className="btn btn-primary mx-1 my-2" onClick={toReverse} >reverse the words</button>
    </div>
    <div className="container" style={myStyle}>
      <h2>Text summary:-</h2>
      <p>{text.split(' ').filter(word => word !== "").length} words and {text.length} charecters</p>
    </div>
    </>
    
  )

}