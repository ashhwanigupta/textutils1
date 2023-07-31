import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './Home';

function Lower(props) {

  const [text, setText] = useState("Enter Text Here")
  
  const handleClick = () =>{
    let newText = text.toLowerCase()
    setText(newText)  
  }

  const handleOnChange= (e) =>{
    setText(e.target.value)
  }





  return (
    <div>
      <h1>{props.heading} - </h1>
        <div className="mb-3">
          <textarea className='form-control' value={text} onChange={handleOnChange} id="mybox" cols="30" rows="10"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleClick}>Convert to Lowercase</button>
     

      {/* <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/solutions" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/services" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Home />} />
          </Routes>
        </Router> */}
    </div>
  )
}

export default Lower
