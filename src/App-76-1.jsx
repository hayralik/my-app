import { useState } from 'react';

function App() {
	const initNotes = [
		{
			id: 0,
			p1: 1,
			p2: 2,
		},
		{
			id: 1,
			p1: 11,
			p2: 12,
		}
	];
	const [notes, setNotes] = useState(initNotes);

	function getElement(x) {
		return <li key={x.id}>
			<span>{x.p1} </span>
			<span>{x.p2} </span>
			<br />
			<button onClick={() => addLi(x.id)}>add {x.id}</button>
			<button onClick={() => delLi(x.id)}>del {x.id}</button>
		</li>;
	}
	const result = notes.map(getElement);

	function addLi(id) {
		const changeElement = (x) => x.id === id
			? { ...x, p1: x.p1 + '!', p2: x.p2 + '!' }
			: x;

		setNotes(notes => notes.map(changeElement));
	}
	function delLi(id) {
		setNotes(notes => notes.slice(0, -1));
	}

	return <div>
		<ul>
			{result}
		</ul>
	</div>;
}

export default App;

