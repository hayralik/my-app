import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	function f(prev) {
		return prev + 1
	}
	
	return <div>
		<span>{count}</span>
		<button onClick={() => setCount(f)}>+</button>

	</div>;
}

export default App;