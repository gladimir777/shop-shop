import { For } from 'solid-js';
import Card from '../components/Card';
import { useCartContext } from '../context/CartContext';

function Cart() {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
  };
  return (
    <div class='max-w-md my-8 mx-auto'>
      <Card rounded={true}>
        <h2>Your shoping cart</h2>
        <For each={items}>
          {(item) => (
            <p class='my-3'>
              {item.title} - ${item.price} - {item.quantity}
            </p>
          )}
        </For>
        <p class='mt-8 pt-4 border-t-2 font-bold'>$ {total()}</p>
      </Card>
    </div>
  );
}
export default Cart;
