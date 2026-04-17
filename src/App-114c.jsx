import { createContext, useContext } from 'react';
export const MyContext = createContext();

export function Provider({ children }) {
  return (
    <MyContext.Provider value={{ x: 10, y: 20 }}>
      {children}
    </MyContext.Provider>
  );
}

function Display() {
  const { x, y } = useContext(MyContext);
  return <div>{x} {y}</div>;
}

function App() {
  return (
    <Provider>
      <Display />
    </Provider>
  );
}

export default App;