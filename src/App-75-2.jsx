import { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [i1, setI1] = useState('');
	const [i2, setI2] = useState('');
	const [i3, setI3] = useState('');

	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});

	function f(e) {
		if (e.target.name === 'n1') {
			setI1(p => e.target.value);
		}
		if (e.target.name === 'n2') {
			setI2(p => e.target.value);
		}
		if (e.target.name === 'n3') {
			setI3(p => e.target.value);
		}
	}

	function g(p) {
		setNotes(p => [...p, i1, i2, i3])
	}

	return <div>
		<input name='n1' value={i1} onChange={f} />
		<input name='n2' value={i2} onChange={f} />
		<input name='n3' value={i3} onChange={f} />
		<ul>
			{result}
		</ul>
		<button onClick={g}>add</button>
	</div>;
}

export default App;

