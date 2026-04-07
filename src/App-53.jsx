import React, { useState } from 'react';

function App() {
	const [name, setName] = useState('prod');
	
	function clickHandler() {
		setName('xxxx');
	}
	
	return <div>
		<span>{name}</span>
		<button onClick={clickHandler}>btn</button>
	</div>;
}

export default App;