import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src="../../logo-ecommerce.png" alt="" className="d-inline-block align-text-top"/>
                </a>
                {/* MENU HAMBURGUESA*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Remeras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Whishlist</a>
                        </li>
                    </ul>
                <span className="navbar-text">
                     <a className="nav-link btn-login" href="#">Login</a>
                </span>
            </div>
        </div>
      </nav>
    )
}

export default NavBar