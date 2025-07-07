import { createStore } from 'solid-js/store';
import { CartContext } from './create';
import { useContext } from 'solid-js';

export function CartContextProvider(props) {
  const [items, setItems] = createStore([
    {
      title: 'test product',
      quantity: 30,
      id: 100,
      price: 15
    },
    {
      title: 'test product',
      quantity: 10,
      id: 10,
      price: 25
    }
  ]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
