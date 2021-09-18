import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'; 
import './ItemList.css';

//import ItemCount from '../ItemCount/ItemCount';

// FUNCION CARGA ITEMS
    
    function getList(){
        
    const productos = [
        {id:'01',title:'Remera Mangas Cortas Yoda',price:'$2000',pictureUrl:'../../remera-1.png'},
        {id:'02',title:'Camisa Jedi',price:'$3000',pictureUrl:'../../camisa-1.png'},
        {id:'03',title:'Pantalon Deportivo Anakin',price:'$5500',pictureUrl:'../../pantalon-1.png'},
    ]
        return new Promise ((resolve, rejetc)=> {
            setTimeout(()=> resolve(productos),1000)
        })
    }


    const ItemList = () => {
       
        const [Item, setItem] = useState([])
      
      
        useEffect(()=> { 
          
            const lista = getList()
            lista.then(lista =>{setItem(lista)})},[] )
            
               return (      
                   <>
                 
                       <div className="itemlist row">

                           {Item.map(items => 
                           <div key={items.id} className="card card-producto">
                           
                                   <img className="image-producto card-img-top" src={items.pictureUrl}  alt="imagen producto"/>
                                   <div className="card-body">
                                   <h5 className="card-title" key={items.id}>{items.title}</h5> 
                                   <p className="card-text" key={items.id}>{items.price}</p>
                                   <button className="ver-detalle">VER DETALLE DE PRODUCTO</button>
                               </div>
                           </div> )}
                       </div>
                    
                   </>
            );
        }


export default  ItemList