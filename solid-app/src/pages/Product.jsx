import { useParams } from '@solidjs/router';
import { Show, createResource, createSignal } from 'solid-js';
import { useCartContext } from '../context/CartContext';

const fetchProduct = async (id) => {
  const res = await fetch('http://localhost:4000/products/' + id);
  return res.json();
};

function Product() {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct);
  const { items, setItems } = useCartContext();
  const [adding, setAdding] = createSignal(false);

  const addProduct = () => {
    setAdding(true);

    setTimeout(() => setAdding(false), 2000);
    const exist = items.find((p) => p.id === product().id);
    if (exist) {
      setItems(
        (p) => p.id === product().id,
        'quantity',
        (q) => q + 1
      );
    }

    if (!exist) {
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  };

  return (
    <div class='my-7'>
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div class='grid grid-cols-5 gap-7'>
          <div class='col-span-2'>
            <img src={product().img} alt='product image' />
          </div>
          <div class='col-span-3'>
            <h2 class='my-3 font-bold mb-7 text-3xl'>{product().title}</h2>

            <p>{product().description}</p>
            <p class='my-7 text-2xl'>Only ${product().price}</p>
            <button onclick={addProduct} class='btn' disabled={adding()}>
              Add to cart
            </button>

            <Show when={adding()}>
              <div class='m-2 p-2 border-amber-500 border-2 rounded-md inline-block'>
                {product().title} was added to the cart
              </div>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
}
export default Product;
