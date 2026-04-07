function App() {
	function func(event) {
		console.log(event.target); // объект с событием
		console.log(event.currentTarget); // объект с событием
	}

	return <div>
		<button onClick={func}>
			Кнопка<br/>
			<div>
				<br/>Див!
			</div>
		</button>
	</div>;
}

export default App;