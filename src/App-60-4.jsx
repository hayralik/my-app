import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  return (
    <div>
      <input
        onChange={e => setValue(e.target.value)}
        onBlur={() => setDisplayValue(value)}
      />
      <p>{displayValue}</p>
    </div>
  );
}

export default App;