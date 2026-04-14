import { useState } from 'react';

function App() {
	const [checked, setChecked] = useState(true);

	return <div>
		<label>
			<input
				type="checkbox"
				checked={checked}
				onChange={() => setChecked(p => !p)}
			/>
			Птичка!
		</label>
	</div>;
}

export default App;