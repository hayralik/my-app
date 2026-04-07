function App() {
	const users = [
		{ name: 'user1', surn: 'surn1', age: 30 },
		{ name: 'user2', surn: 'surn2', age: 31 },
		{ name: 'user3', surn: 'surn3', age: 32 },
	];

	const res = users.map(function (item, ind) {
		return <li key={ind}>
			name: {item.name}, surname: {item.surn}, age: {item.age} 
			</li>
	});

	return <div>
		<ul>
			{res}
		</ul>
	</div>;
}

export default App;