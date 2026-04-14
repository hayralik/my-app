import { useState } from 'react';

function App() {
	const [checked, setChecked] = useState(true);

	function handleChange() {
		//		setChecked(!checked); // инвертируем стейт
		setChecked(p => !p); // инвертируем стейт
	}

	return <div>
		<label>
			<input type="checkbox" checked={checked} onChange={handleChange} />
			Птичка!
		</label>
	</div>;
}

export default App;