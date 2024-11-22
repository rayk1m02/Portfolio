import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // count is the state
  return (
    <div>
      <p>{count}</p>
      <button 
      className="border border-gray-500 px-4 py-2 rounded" 
      onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
export default Counter;