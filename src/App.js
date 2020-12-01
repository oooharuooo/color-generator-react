import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
   const [listColor, setListColor] = useState(new Values("#e60000").all(10));
  

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let newColors = new Values(color).all(10);
      setListColor(newColors);
    } catch (error) {
        setError(true)
        console.log(error);
    }
  }
  return (
		<>
			<section className="container">
				<h3>Color Generator</h3>
				<form onSubmit={submitHandler}>
					<input
						type="text"
						onChange={(e) => setColor(e.target.value)}
						value={color}
						placeholder="#e60000"
						className={`${error ? "error" : null}`}
					/>
					<button type="submit" className="btn">
						Submit
					</button>
				</form>
			</section>
			<section className="colors">
				{listColor.map((list,index) => {
					return <SingleColor key = {index} list={list} />;
				})}
			</section>
		</>
	);
}

export default App
