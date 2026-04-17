import { createContext, useContext } from 'react'; // ✅ добавили useContext
export const MyContext = createContext();

export function Provider({ children }) {
	return (
		<MyContext.Provider value={{ x: 10, y: 20 }}>
			{children}
		</MyContext.Provider>
	);
}

function App() {
	const { x, y } = useContext(MyContext); // ✅ получаем x через useContext

	return <Provider>
		{x} {y}
	</Provider>;
}

export default App;