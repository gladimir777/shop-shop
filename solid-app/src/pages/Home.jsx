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
        {/* <Card title='Shop Shop' rounded={true} flat={false}>
          <h2>Shop shop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut,
            perferendis reiciendis et cupiditate numquam.
          </p>
          <button class='btn'>Click me!</button>
        </Card>
        <Card title='Shop Shop' rounded={false} flat={true}>
          <h2>Shop shop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut,
            perferendis reiciendis et cupiditate numquam.
          </p>
          <button class='btn'>Click me!</button>
        </Card>
        <Card title='Shop Shop' rounded={true} flat={false}>
          <h2>Shop Shop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut,
            perferendis reiciendis et cupiditate numquam.
          </p>
          <button class='btn'>Click me!</button>
        </Card>
        <Card title='Shop Shop' rounded={true} flat={false}>
          <h2>Shop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut,
            perferendis reiciendis et cupiditate numquam.
          </p>
          <button class='btn'>Click me!</button>
        </Card> */}
        <For each={products()}>
          {(product) => (
            <Card title='Shop Shop' rounded={true} flat={false}>
              <img src={product.img} alt='product image' />
              <h2 class='my-3 font-bold'>{product.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                aut, perferendis reiciendis et cupiditate numquam.
              </p>
              <button class='btn'>Click me!</button>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}
export default Home;
