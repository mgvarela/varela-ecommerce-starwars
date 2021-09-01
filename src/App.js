import './App.css';
import NavBar from './components/NavBar/NavBar.js'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar/> {/* Menu */}
      </header>
      <div>
          <h2>Proximamente</h2>
          <h1>OFERTAS INCREIBLES!</h1>
      </div>
    </div>
  );
}

export default App;
