import banner from './assets/banner.png';
import Card from './components/Card';

function App() {
  return (
    <div>
      <header>
        <h1>Shop shop</h1>
      </header>
      <div>
        <img src={banner} alt='site baner' />
        <Card />
      </div>
    </div>
  );
}

export default App;
