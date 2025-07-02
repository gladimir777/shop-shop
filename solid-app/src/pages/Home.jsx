import { createResource } from 'solid-js';
import Card from '../components/Card';

const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products');
  return res.json();
};

function Home() {
  const [products] = createResource(fetchProducts);
  return (
    <div class='grid grid-cols-4 gap-10 my-4'>
      <Card title='Shop Shop' rounded={true} flat={false}>
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
      </Card>
    </div>
  );
}
export default Home;
