import banner from './assets/banner.png';
import Card from './components/Card';

function App() {
  return (
    <div class='container m-auto'>
      <header>
        <h1>Shop shop</h1>
      </header>
      <div>
        <img class='rounded-md' src={banner} alt='site baner' />
        <div class='grid grid-cols-4 gap-10 my-4'>
          <Card title='Shop Shop' rounded={true} flat={false}>
            <h2>Shop shop</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aut, perferendis reiciendis et cupiditate numquam.
            </p>
            <button class='btn'>Click me!</button>
          </Card>
          <Card title='Shop Shop' rounded={false} flat={true}>
            <h2>Shop shop</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aut, perferendis reiciendis et cupiditate numquam.
            </p>
            <button class='btn'>Click me!</button>
          </Card>
          <Card title='Shop Shop' rounded={true} flat={false}>
            <h2>Shop Shop</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aut, perferendis reiciendis et cupiditate numquam.
            </p>
            <button class='btn'>Click me!</button>
          </Card>
          <Card title='Shop Shop' rounded={true} flat={false}>
            <h2>Shop</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aut, perferendis reiciendis et cupiditate numquam.
            </p>
            <button class='btn'>Click me!</button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
