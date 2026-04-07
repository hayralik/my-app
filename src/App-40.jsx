function App() {
	const arr = ['a', 'b', 'c'];

	const res = arr.map(function (item, ind) {
		return <li key={ind}>{item}</li>
	});

	return <div>
		<ul>
			{res}
		</ul>
	</div>;
}

export default App;