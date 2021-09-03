import './CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartFill } from 'react-bootstrap-icons';

  
const CartWidget = () => {
    return (
            <a className="nav-link icon-cart" href=""> 
                   <CartFill /> 
                   <span className="quanty-cart">
                       1
                   </span>
            </a>
           );
}

export default CartWidget