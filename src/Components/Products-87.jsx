import { useState } from 'react';

const initProds = [
	{ id: 0, name: 'product1', cost: 100, inCart: false },
	{ id: 1, name: 'product2', cost: 200, inCart: false },
	{ id: 2, name: 'product3', cost: 300, inCart: false },
];

function Product({ id, name, cost, inCart, addToCart }) {
	return <div>
		id: <span>{id}</span>,
		name: <span>{name}</span>,
		cost: <span>{cost}</span>,
		<span>{inCart ? 'in cart' : 'not in cart'}</span>
		<button onClick={() => addToCart(id)}>to cart</button>
	</div>;
}

function Products() {
	const [prods, setProds] = useState(initProds);

	function addToCart(id) {
		setProds(prods.map(prod => prod.id === id ? { ...prod, inCart: true } : prod))
	}

	const items = prods.map(prod => {
		return <Product
			key={prod.id}
			id={prod.id}
			name={prod.name}
			cost={prod.cost}
			inCart={prod.inCart}
			addToCart={addToCart}
		/>;
	});

	return <div>
		{items}
	</div>;
}

export default Products;