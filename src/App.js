import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar/> {/* Menu */}
      </header>
      <div>
          <ItemListContainer/> {/* Coming Soon */}
         <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
