import { For, Show, createResource } from 'solid-js';
import Card from '../components/Card';

const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products');
  return res.json();
};

function Home() {
  const [products] = createResource(fetchProducts);
  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class='grid grid-cols-4 gap-10 my-4'>
        <For each={products()}>
          {(product) => (
            <Card title='Shop Shop' rounded={true} flat={false}>
              <img src={product.img} alt='product image' />
              <h2 class='my-3 font-bold'>{product.title}</h2>
              <a href={'/product/' + product.id} class='btn'>
                View Product
              </a>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}
export default Home;
