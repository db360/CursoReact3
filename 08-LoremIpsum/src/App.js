import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count); // convierte string a num
    if(count <= 0) {
      amount = 1;
    }
    if(count > 8) {
      amount = 8
    }
    // console.log(amount)
    setText(data.slice(0, amount)) // recorta el string con el valor del input
  }
  return (

  <section className="section-center">
      <h3>Tired of boring loren ipsums?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input
          type="number"
          name="amount"
          id="amoutn"
          value={count}
          onChange={(e) => setCount(e.target.value) }
        />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index)=> {
          return (
            <p key={index}>{item}</p>
          )
        })}
      </article>
  </section>

  )
}

export default App;
