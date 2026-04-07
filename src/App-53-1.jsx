import React, { useState } from 'react';

function App() {
	const [name, setName] = useState('Jim');
	const [surname, setSurname] = useState('Vandam');
	const [age, setAge] = useState(45);
	
	return <div>
		<span>{name}</span>
		<button onClick={() => setName('Филипп')}>btn1</button>
		<br />

		<span>{surname}</span>
		<button onClick={() => setSurname('Киркоров')}>btn2</button>
		<br />

		<span>{age}</span>
		<button onClick={() => setAge(150)}>btn3</button>
		<br />
	</div>;
}

export default App;