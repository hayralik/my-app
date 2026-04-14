import { useState } from 'react';

function App() {
	const [html, setHtml] = useState(true);
	const [css, setCss] = useState(true);
	const [js, setJs] = useState(true);
	const [msg, setMsg] = useState("");

	return <div>
		<input
			type="checkbox"
			checked={html}
			onChange={() => setHtml(p => !p)}
		/>
		<input
			type="checkbox"
			checked={css}
			onChange={() => setCss(p => !p)}
		/>
		<input
			type="checkbox"
			checked={js}
			onChange={() => setJs(p => !p)}
		/>
		<button onClick={() => setMsg(js ? 'Привет!' : 'Пока!')}>Кнопка</button>
		<p>{html && "html"}</p>
		<p>{css && "css"}</p>
		<p>{js && "js"}</p>
	</div>;
}

export default App;

