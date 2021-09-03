import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar/> {/* Menu */}
      </header>
      <div>
          <ItemListContainer/> {/* Coming Soon */}
      </div>
    </div>
  );
}

export default App;
