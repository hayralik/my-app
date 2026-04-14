import { useState } from 'react';

const initProds = [
	{ id: 0, name: 'product1', cost: 100, isEdit: false },
	{ id: 1, name: 'product2', cost: 200, isEdit: false },
	{ id: 2, name: 'product3', cost: 300, isEdit: false },
];

function Product({ id, name, cost, isEdit, toggleMode, editProd }) {
	return <div>
		name: {
			isEdit
				? <input value={name} onChange={e => editProd(id, 'name', e)} />
				: <span>{name}</span>
		},
		cost: {
			isEdit
				? <input value={cost} onChange={e => editProd(id, 'cost', e)} />
				: <span>{cost}</span>
		},
		<button onClick={() => toggleMode(id)}>
			{isEdit ? 'save' : 'edit'}
		</button>
	</div>;
}

function Products() {
	const [prods, setProds] = useState(initProds);

	function toggleMode(id) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod.isEdit = !prod.isEdit;
			}

			return prod;
		}));
	}

	function editProd(id, field, e) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod[field] = e.target.value;
			}

			return prod;
		}));
	}

	const items = prods.map(prod => {
		return <Product
			key={prod.id}
			id={prod.id}
			name={prod.name}
			cost={prod.cost}
			isEdit={prod.isEdit}
			toggleMode={toggleMode}
			editProd={editProd}
		/>;
	});

	return <div>
		{items}
	</div>;
}

export default Products;