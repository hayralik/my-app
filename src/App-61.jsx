import { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<textarea value={value} onChange={handleChange} />
		<p>{value}</p>
	</div>;
}

export default App;