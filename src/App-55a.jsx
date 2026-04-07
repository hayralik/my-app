import { useState } from 'react';


function App() {
	const startValue = { n: 0, a: 0, b: 1 };
	const [count, setCount] = useState(startValue);

	function f(prev) {
		return {
			n: prev.n + 1,
			a: prev.b,
			b: prev.a + prev.b
		};
	}
	return <div>
		<button onClick={() => setCount(f)}>+</button>
		<span> {count.n}: {count.b} </span>
		<button onClick={() => setCount(startValue)}>Reset</button>

	</div>;
}

export default App;