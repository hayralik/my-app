import { useState, createContext, useContext } from 'react';

const MyContext = createContext();

function App() {
  const [name, setName] = useState('Анна');

  return (
    <MyContext.Provider value={{ name, setName }}>
      <A />
    </MyContext.Provider>
  );
}

function Provider() {
  <MyContext.Provider value={{ name, setName }}></MyContext.Provider>
}

function A() {
  return <B />;
}

function B() {
  return <C />;
}

function C() {
  const { name, setName } = useContext(MyContext);
  
  return (
    <div>
      <p>Имя: {name}</p>
      <button onClick={() => setName('Олег')}>Сменить на Олега</button>
    </div>
  );
}

export default App;