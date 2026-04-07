function App() {
	const arr = ['a', 'b', 'c'];

	const res = arr.map(function (item) {
		return <li>{item}</li>
	});

	return <div>
		<ul>
			{res}
		</ul>
	</div>;
}

export default App;