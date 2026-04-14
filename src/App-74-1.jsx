import { useState } from 'react';

function App() {
	const initData = [1, 2, 3, 4, 5];
	const [notes, setNotes] = useState(initData);

	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});

	function handOnClick() {
		setNotes(p => [...p, p.length + 1]);
	}

	return <div>
		<ul>
			{result}
		</ul>
		<button onClick={handOnClick}>add</button>
	</div>;
}

export default App;

