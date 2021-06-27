import React, { useState } from 'react';

const onButtonClick = (count, setCount) => {
  setCount(count + 1);
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => onButtonClick(count, setCount)}>Click Me!</button>

      <h1>Current Count: {count}</h1>
    </div>
  );
};

export default App; 