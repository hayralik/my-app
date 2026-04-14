import { useState } from 'react';


const initNotes = [
	{
		id: 0,
		name: 'name1',
		desc: 'long description 1',
		show: false,
	},
	{
		id: 1,
		name: 'name2',
		desc: 'long description 2',
		show: false,
	},
	{
		id: 2,
		name: 'name3',
		desc: 'long description 3',
		show: false,
	},
];

function App() {
	const [notes, setNotes] = useState(initNotes);
	
	const result = notes.map(note => {
		return <p key={note.id}>
			{note.name}, 
			<i>{note.show && note.desc}</i><br />
			<button onClick={() => toggleDesc(note.id)}>Show Description</button>
		</p>;
	});

	function toggleDesc(id) {
		const changeElement = (x) => x.id === id
		? {...x, show: !x.show}
		: x;
			
		setNotes(notes => notes.map(changeElement));
	}
	
	return <div>
		{result}
	</div>;
}

export default App;
