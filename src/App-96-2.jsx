import { useState } from 'react';

function getSum(arr) {
	let res = 0;
	for (let elem of arr) { res += +elem; }
	return res;
}

function Calculator() {
	const [value, setValue] = useState('');
	const [nums, setNums] = useState([1, 2, 3]);
	const sum = getSum(nums);

	function handleBlur() {
		setNums(p => [...p, value]);
		setValue('');
	}

	return <div>
		<p>{nums.join(', ')}</p>
		<p>{sum}</p>
		<input value={value} onChange={e => setValue(e.target.value)} onBlur={handleBlur} />
	</div>;
}

function App() {
	return <div>
		<Calculator />
	</div>;
}
export default App;

