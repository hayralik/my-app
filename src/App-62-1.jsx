import { useState } from 'react';

function App() {
	const [checked, setChecked] = useState(true);
	const [msg, setMsg] = useState("");

	return <div>
		<input
			type="checkbox"
			checked={checked}
			onChange={() => setChecked(p => !p)}
		/>
		<button onClick={() => setMsg(checked ? 'Привет!' : 'Пока!')}>Кнопка</button>
		<p>{msg}</p>
	</div>;
}

export default App;

