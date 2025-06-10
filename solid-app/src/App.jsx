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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
