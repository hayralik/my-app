function App() {
		function func(event) {
			const name = event.target.name;
			if (name == "Alik-1") {
				console.log("Text 1");
			}
			if (name == "Alik-2") {
				console.log("Text 2");
			}
		}
	
	return <div>
		<button name="Alik-1" onClick={func}>Текст 1</button>
		<button name="Alik-2" onClick={func}>Текст 2</button>
	</div>;
}

export default App;