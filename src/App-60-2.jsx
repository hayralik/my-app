import { useState } from 'react';

function App() {

	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [days, setDays] = useState(0);

	return <div>
		<input value={value1} onChange={event => setValue1(event.target.value)} />
		<input value={value2} onChange={event => setValue2(event.target.value)} />

		<br />

		<button onClick={() => setDays(Number(value2) - Number(value1))}>-</button>
		: {days}

	</div>;
}

export default App;