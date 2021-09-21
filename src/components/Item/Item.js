import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'; 
import './Item.css';
import { Link } from 'react-router-dom';
const Item = ({item}) =>{
    if(!item){
        return <h1>Cargando...</h1>
    }
    return (
        <>
         <div className="itemlist row">
            <div className="card card-producto">
                <img className="image-producto card-img-top" src={item?.pictureUrl}  alt="imagen producto"/>
                <div className="card-body">
                    <h5 className="card-title" key={item?.id}>{item?.title}</h5> 
                    <p className="card-text">{item?.price}</p>
                    <Link   className="ver-detalle" to={`/DetalleProducto`}>VER DETALLE DE PRODUCTO</Link>
                  
                </div>
            </div>
        </div>
        </>        
    )
}
export default Item