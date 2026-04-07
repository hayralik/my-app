import React, { useState } from 'react';

function App() {
	const [name, setName] = useState('Jim');
	const [surname, setSurname] = useState('Vandam');
	const [age, setAge] = useState(45);
	
	return <div>
		<span>{name}</span><br />
		<span>{surname}</span><br />
		<span>{age}</span><br />
	</div>;
}

export default App;