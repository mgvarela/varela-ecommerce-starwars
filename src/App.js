import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/views/Home';
import Products from './components/views/Products';
import Product from './components/views/Product';
import Whislist from './components/views/Whislist';
import Login from './components/views/Login';
import DetalleProducto from './components/views/DetalleProducto';

const App = () => {
  const products = [
    {id:1,name: 'Remeras'},
    {id:2,name: 'Camisas'},
    {id:3,name: 'Pantalones'}
  ]
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar products={products}/> {/* Menu */}   
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/product/:name">
          <Product/>
          </Route>
          <Route path="/DetalleProducto">
          <DetalleProducto/>
          </Route>
          <Route path="/Whislist">
             <Whislist/>
          </Route>
          <Route path="/Login">
             <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
