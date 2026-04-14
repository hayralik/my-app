import { useState } from 'react';

function App() {
	const texts = ['text1', 'text2', 'text3', 'text4'];
	const [value, setValue] = useState('');
	
	const options = texts.map((text, index) => <option key={index}>{text}</option>);
	
	return <div>
		<select value={value} onChange={(event) => setValue(event.target.value)}>
			{options}
		</select>
		<p>
			ваш выбор: {value}
		</p>
	</div>;
}

export default App;

