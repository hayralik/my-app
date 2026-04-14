import { useState } from 'react';

function App() {
	const initData = [];
	const [notes, setNotes] = useState(initData);
	const [value, setValue] = useState(initData);

	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});

	function handOnChange(e) {
		setValue(e.target.value);
	}

	function handOnClick() {
		setNotes(p => [...p, value]);
	}

	return <div>
		<input value={value} onChange={handOnChange}/>
		<button onClick={handOnClick}>add</button>
		<p>{value}</p>
		<ul>
			{result}
		</ul>
	</div>;
}

export default App;

