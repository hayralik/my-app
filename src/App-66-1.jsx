import { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	
	return <div>
		<select value={value} onChange={(event) => setValue(event.target.value)}>
			<option value="1">до 12</option>
			<option value="2">13-17</option>
			<option value="3">18-25</option>
			<option value="4">25 и старше</option>
		</select>
		<p>
			ваш выбор: {value}
		</p>
	</div>;
}

export default App;

