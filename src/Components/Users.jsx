const initUsers = [
	{id: 0, name: 'user1', surname: 'surn1', age: 30},
	{id: 1, name: 'user2', surname: 'surn2', age: 31},
	{id: 2, name: 'user3', surname: 'surn3', age: 32},
];

function User({ id, name, surname, age }) {
	return <div>
		id: <span>{id}</span>,
		name: <span>{name}</span>,
		surname: <span>{surname}</span>,
		age: <span>{age}</span>,
	</div>;
}

function Users() {

	const items = initUsers.map(user => {
		return <User
			key={user.id}
			id={user.id}
			name={user.name}
			surname={user.surname}
			age={user.age}
		/>;
	});

	return <div>
		{items}
	</div>;

}
export default Users;