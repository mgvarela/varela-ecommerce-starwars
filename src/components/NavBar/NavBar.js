import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = ({products}) => {
    return (
        <header className='App-header'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link  activeClassName="nav-link active" to={`/`}>
                    <img src="../../logo-ecommerce.png" alt="" className="d-inline-block align-text-top"/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                    <NavLink to="/" activeClassName="navLink" className="nav-link"> 
                                Home
                        </NavLink>               
                        <NavLink to="/products" activeClassName="navLink" className="nav-link">  
                                Catalogo
                        </NavLink>               
                        {products.map(cat => <NavLink key={cat.id} to={`/products/${cat.name}`} activeClassName="navLink" className="nav-link">{cat.name}</NavLink>)}            
                               
                        <NavLink to="/Whislist" activeClassName="navLink" className="nav-link">  
                                Whislist
                        </NavLink>  
                    </ul>
                    <span className="navbar-text"> <CartWidget/> </span>
                <span className="navbar-text">
                     <a className="nav-link btn-login" href="/Login">Login</a>
                </span>
            </div>
        </div>
      </nav>
      </header>
    )
}

export default NavBar