function App() {
	const users = [
		{ id: 1, name: 'user1', surn: 'surn1', age: 30 },
		{ id: 2, name: 'user2', surn: 'surn2', age: 31 },
		{ id: 3, name: 'user3', surn: 'surn3', age: 32 },
	];

	const res = users.map(function (item) {
		return <li key={item.id}>
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