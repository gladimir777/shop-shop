import Card from '../components/Card';

function Home() {
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
