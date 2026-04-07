function App() {
	function showMess(text) {
		alert('hello, ' + text);
	}
	
	return <div>
		<button onClick={() => showMess('user1')}>show1</button>
		<button onClick={() => showMess('user2')}>show2</button>
	</div>;
}

export default App;