import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let number = parseInt(count)
    if(count < 0) {
      number = 1
    }
    if(count > 8){
      number = 8
    }
    setText(data.slice(0, number)) 
  };
  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className='lorem-text'>
       {text.map((item,index) => {
        return <p key={index}>{item}</p>
       })}
      </article>
    </section>
  );
}

export default App;
