function App() {
	const arr = [];
	for (let i = 0; i <= 5; i++) {
		arr.push(<li>{i}</li>)
	}

	return <div>
		<ul>
			{arr}
		</ul>
	</div>;
}

export default App;