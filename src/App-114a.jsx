import { createContext } from 'react';
export const CartContext = createContext();

export function CartProvider({ children }) {
  return (
    <CartContext.Provider value={'Alik'}>
      {children}
    </CartContext.Provider>
  );
}

function App() {
<CartProvider>
        <App1 />
</CartProvider>
}
