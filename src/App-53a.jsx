import React, { useState } from 'react';

function App() {
	const [name, setName] = useState('prod');
	
	return <div>
		<span>{name}</span>
		<button onClick={() => setName('xxxx')}>btn</button>
	</div>;
}

export default App;