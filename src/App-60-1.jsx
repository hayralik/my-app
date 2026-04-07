import { useState } from 'react';

function App() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [sum, setSum] = useState(0);
	const [mul, setMul] = useState(0);
	
	return <div>
		<input value={value1} onChange={event => setValue1(event.target.value)} />
		<input value={value2} onChange={event => setValue2(event.target.value)} />
		
		<br />
		<button onClick={() => setSum(Number(value1) + Number(value2))}>+</button>
		: {sum}

		<br />
		<button onClick={() => setMul(Number(value1) * Number(value2))}>*</button>
		: {mul}
	</div>;
}

export default App;