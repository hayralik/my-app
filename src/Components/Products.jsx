const initProds = [
	{ id: id(), name: 'product1', cost: 100 },
	{ id: id(), name: 'product2', cost: 200 },
	{ id: id(), name: 'product3', cost: 300 },
];

function Product({ name, cost }) {
	return <div>
		name: <span>{name}</span>,
		cost: <span>{cost}</span>
	</div>;
}

function Products() {

	const items = prods.map(prod => {
		return <Product
			key={prod.id}
			name={prod.name}
			cost={prod.cost}
		/>;
	});

	return <div>
		{items}
	</div>;

}
export default Products;