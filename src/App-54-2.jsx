import React, { useState } from 'react';

function App() {
	const [inCart, setInCart] = useState(false);
	const [durak, setDurak] = useState(false);
	
	return <div>
		<span>{inCart ? 'в корзине' : 'не в корзине'}</span>
		<button onClick={() => setInCart(!inCart)}>Кнопка</button>
		<br />

		<span>{durak ? 'я дурак!' : 'я не дурак'}</span>
		<button onClick={() => setDurak(!durak)}>{durak ? 'я дурак!' : 'я не дурак'}</button>

	</div>;
}
export default App;