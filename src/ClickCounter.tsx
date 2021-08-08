import { useState } from 'react';

export const CLickCounter = () => {
  const [count, setCount] = useState(0);
  const pppp = 'iqbal';
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count {count} </button>
    </div>
  );
};
