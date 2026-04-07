function App() {
	function showMess(text) {
		alert('hello, ' + text);
	}
	
	function createButton(alertText, buttonText) {
		return <button onClick={() => showMess(alertText)}>{buttonText}</button>
	}

	const res = <button onClick={() => showMess(3)}>act 3</button>
	return <div>
		{createButton("alert 1", "botton 1")}
		{createButton("alert 2", "botton 2")}
		{createButton("alert 3", "botton 3")}
	</div>;
}

export default App;