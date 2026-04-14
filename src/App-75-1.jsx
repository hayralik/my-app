import { useState } from 'react';

function App() {
	const initNotes = [
		{
			id: 'GYi9G_uC4gBF1e2SixDvu',
			prop1: 'value11',
			prop2: 'value12',
			prop3: 'value13',
		},
		{
			id: 'IWSpfBPSV3SXgRF87uO74',
			prop1: 'value21',
			prop2: 'value22',
			prop3: 'value23',
		},
		{
			id: 'JAmjRlfQT8rLTm5tG2m1L',
			prop1: 'value31',
			prop2: 'value32',
			prop3: 'value33',
		},
	];
	const [notes, setNotes] = useState(initNotes);

	const result = notes.map(note => {
		return <li key={note.id}>
			<span>{note.prop1} </span>
			<span>{note.prop2} </span>
			<span>{note.prop3} </span>
		</li>;
	});

	function f() {
		setNotes(p => [...p, {
			id: crypto.randomUUID(),
			prop1: Math.random(),
			prop2: Math.random(),
			prop3: Math.random(),
		}])
	};

	return <div>
		<ul>
			{result}
		</ul>
		<button onClick={f}>add</button>
	</div>;
}

export default App;

