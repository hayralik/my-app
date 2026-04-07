import { useState } from 'react';

function App() {
	const [val1, setVal1] = useState('');
	const [val2, setVal2] = useState('');
		
	return <div>
		<input value={val1} onChange={event => setVal1(event.target.value)} />
		<p>text: {val1}</p>

		<input value={val2} onChange={event => setVal2(event.target.value)} />
		<p>text: {val2}</p>
	</div>;
}

export default App;