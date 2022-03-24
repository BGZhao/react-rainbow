import React, { useState } from 'react';

function ColorBlock(props) {
  return (
    <div
      className="colorBlock"
      style={{ 'backgroundColor': props.color }}
    >
      {props.color}
    </div>
  )
}

function ColorForm(props) {
  let [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default submit button behavior
    props.addColor(input);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  )
}

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  let colorMap = colors.map((color, i) => {
    return (
      <div>
        <ColorBlock key={i} color={color} />
      </div>
    )
  })
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;