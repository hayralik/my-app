import { useState } from 'react';

function Calculator() {
	const [temp, setTemp] = useState(0);

	return <div>
		<Verdict temp={temp} />
		<TempInp temp={temp} setTemp={setTemp} />

	</div>;
}

function Verdict({ temp }) {
	return <p>
		{temp}
	</p>;
}

function TempInp({ temp, setTemp }) {
	return <>
		<button onClick={() => setTemp(p => p + 1)}>Set Temperature</button>
		<br />
		<input value={temp} onChange={(e) => setTemp(e.target.value)} />
	</>
}

export default Calculator;