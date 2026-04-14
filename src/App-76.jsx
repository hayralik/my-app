import { useState } from 'react';

function App() {
	const initNotes = [
		{
			id: 0,
			p1: 1,
			p2: 2,
		}
	];
	const [notes, setNotes] = useState(initNotes);

	const result = notes.map(x => {
		return <li key={x.id}>
			<span>{x.p1} </span>
			<span>{x.p2} </span>
			<br />
			<button onClick={() => doSmth(x.id)}>btn</button>
		</li>;
	});

	function doSmth(id) {
		const changeElement = (x) => x.id === id
		? {...x, p1: x.p1 + '!', p2: x.p2 + '!'}
		: x.p2 += '!';
			
		setNotes(notes => notes.map(changeElement));
	}

	return <div>
		<ul>
			{result}
		</ul>
	</div>;
}

export default App;

