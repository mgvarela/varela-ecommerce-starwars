import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'; 
import './ItemList.css';
import ItemCount from '../ItemCount/ItemCount';




    const productos = [
        {id:'01',title:'Remera Mangas Cortas Yoda',price:'$2000',pictureUrl:'../../remera-1.png'},
        {id:'02',title:'Camisa Jedi',price:'$3000',pictureUrl:'../../camisa-1.png'},
        {id:'03',title:'Pantalon Deportivo Anakin',price:'$5500',pictureUrl:'../../pantalon-1.png'},
    ]
    
    function getList(){
        return new Promise ((resolve, rejetc)=> {
            setTimeout(()=> resolve(productos),3000)
        })
    }
    
    
    const ItemList = () => {
        const [listaProductos, setListaProductos] = useState([])
        useEffect(()=> { 
            const lista = getList()
            lista.then(lista =>{setListaProductos(lista)})},[] )
    
        return (      
            <div className="itemlist row">
                {listaProductos.map(ropa => 
                 <div key={ropa.id} className="card card-producto">
                        <p className="ver-detalle">VER DETALLE DE PRODUCTO</p>
                        <img className="image-producto card-img-top" src={ropa.pictureUrl}  alt="imagen producto"/>
                        <div className="card-body">
                        <h5 className="card-title" key={ropa.id}>{ropa.title}</h5> 
                        <p className="card-text" key={ropa.id}>{ropa.price}</p>
                        <div><ItemCount/></div>
                    </div>
                </div> )}
            </div>
     );
    }


export default  ItemList