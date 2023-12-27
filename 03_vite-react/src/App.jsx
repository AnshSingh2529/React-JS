import React, { useState } from 'react';
import './App.css'

function App() {
  // Initialize state with a value of 0
  const [value, setValue] = useState(0);

  // Function to increment the counter
  const addVal = () => {
    // Check if the current value is less than 20 before updating
    if (value < 20) {
      // Update the state by incrementing the current value
      setValue(value + 1);
    }
  };

  // Function to decrement the counter
  const remVal = () => {
    // Check if the current value is greater than 0 before updating
    if (value > 0) {
      // Update the state by decrementing the current value
      setValue(value - 1);
    }
  };

  return (
    <>
      <h1>codeIansh</h1>
      <h2>Counter Value {value}</h2>
      {/* Button to increment the counter */}
      <button onClick={addVal}>Add Val</button>
      {/* Button to decrement the counter */}
      <button onClick={remVal}>Remove Val</button>
    </>
  );
}

export default App;
