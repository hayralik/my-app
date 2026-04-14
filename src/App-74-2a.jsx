import { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([]);
	const [value, setValue] = useState('');

	function handOnChange(e) {
		setValue(e.target.value);
	}

	function handOnClick() {
		setNotes(p => [...p, <li key={notes.length}>{value}</li>]);
	}

	return <div>
		<input value={value} onChange={handOnChange}/>
		<button onClick={handOnClick}>add</button>
		<p>{value}</p>
		<ul>
			{notes}
		</ul>
	</div>;
}

export default App;

