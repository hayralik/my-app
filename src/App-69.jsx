import { useState } from 'react';

function App() {
	const [checked, setChecked] = useState(true);
	
	return <div>
		<input type="checkbox" defaultChecked={checked} />
	</div>;
}

export default App;

