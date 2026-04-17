import { useState, createContext, useContext } from 'react';

function App() {
  return (
    <MyComponent name='Alik'>
      <span>Пример текста</span>
      <button>Кнопка</button>
    </MyComponent>
  );
}

function MyComponent(props) {
  // Используем props.children внутри JSX
  return (
    <div className="card">
      {props.children}
      {props.name}
    </div>
  );
}

<MyComponent>
  <span>Пример текста</span>
  <button>Кнопка</button>
</MyComponent>

export default App;