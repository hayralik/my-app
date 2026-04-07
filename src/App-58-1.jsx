import { useState } from 'react';

function App() {
	const [value, setValue] = useState(0);
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<input value={value} onChange={handleChange} />
		<p>{2026 - value}</p>
	</div>;
}

export default App;