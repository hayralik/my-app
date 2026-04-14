import { useState } from 'react';

function App() {
	function getSum(arr) {
		let sum = 0;
		for (const elem of arr) { sum += +elem; }
		return sum;
	}

	const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	function changeHandler(index, event) {
		setNotes([...notes.slice(0, index), event.target.value,
		...notes.slice(index + 1)]);
	}

	const result = notes.map((note, index) => {
		return <input
			key={index}
			value={note}
			onChange={event => changeHandler(index, event)}
		/>;
	});

	return <div>
		{result}
		<br />
		{getSum(notes) / notes.length}
	</div>;
}

export default App;

