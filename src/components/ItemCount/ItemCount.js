import { useState } from 'react'
import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = () => {
  
    const [count, setCount] = useState(0)
    const restarItem = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }
    const sumarItem = () => {
        if (count < 5){
            setCount(count + 1)
        }
    }  


    return (
        <div className="itemList">    
          <div className="row img-producto">     
                <div className="col-12">
                 <p>Imagen</p>
                </div>  
          </div>   
          <div className="row"> 
                <div className="col-4">
                    <button  className="btn-resta" onClick={restarItem}>-</button>
                </div>
                <div className="col-4">
                    <p className="contadoStock">{count}</p>
                </div>
                <div className="col-4">
                    <button className="btn-suma" onClick={sumarItem}>+</button>
                </div>
            </div>
            <div>
                <button className="btn-AgregarCarrito">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount