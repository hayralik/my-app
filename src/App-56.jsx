import { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<input value={value} onChange={handleChange} />
		<p>text: {value}</p>
	</div>;
}

export default App;