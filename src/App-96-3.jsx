	import { useState } from 'react';

	function App() {
		const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
		const [editNum, setEditNum] = useState(null);
		const [value, setValue] = useState('');
		
		const result = notes.map((note, index) => {
			return <p key={index} onClick={() => startEdit(index)}>
				{note}
			</p>;
		});
		
		function startEdit(index) {
			setEditNum(index);
			setValue(notes[index]); // пишем текст редактируемого элемента в отдельный стейт 
		}
		
		function changeItem(event) {
			setValue(event.target.value);
			setNotes([...notes.slice(0, editNum), event.target.value,...notes.slice(editNum 
				+ 1)]); 
		}
		
		return <div>
			{result}
			<input value={value} onChange={changeItem} />
		</div>;
	}

	export default App;

