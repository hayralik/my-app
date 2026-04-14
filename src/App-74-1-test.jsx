import { useState } from 'react';

function App() {

	const res1 = <>
		<li key={21}>{21}</li>
		<li key={22}>{22}</li>
	</>;

	const res2 = <li key={23}>{23}</li>;
	const res3 = <>{res1}{res2}</>;
	

	return <div>
		<ul>
			{res1}
			{res2}
			{res3}
		</ul>
	</div>;
}

export default App;

