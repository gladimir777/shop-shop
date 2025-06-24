import { createSignal } from 'solid-js';
import { Route, Router, A } from '@solidjs/router';
import banner from './assets/banner.png';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }
  return (
    <div class='container m-auto'>
      <header
        class='my-4 p-2 text-xl flex items-center gap-4'
        classList={{
          'bg-neutral-900': darkTheme(),
          'text-white': darkTheme()
        }}
      >
        <span
          class='material-symbols-outlined cursor-pointer'
          onclick={toggleTheme}
        >
          light_mode
        </span>
        <h1>Shop shop</h1>
        <a href='/'>Home</a>
        <a href='/cart'>Cart</a>
      </header>

      <img class='rounded-md' src={banner} alt='site baner' />
      <Router>
        <Route path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </Router>
    </div>
  );
}

export default App;
