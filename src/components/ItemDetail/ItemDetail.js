import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { useState,useEffect } from "react";
function getList(){
        
    const productosDetails = [
        {id:'07',title:'Remera Yoda',price:'$2000',pictureUrl:'../../remera-1.png',stock:'2',description:'Remera de Algodon negra xl'},
    ]
        return new Promise ((resolve, rejetc)=> {
            setTimeout(()=> resolve(productosDetails),5000)
        })
    }

   
    const ItemDetail = () => {
        const [Item, setItem] = useState([])
        useEffect(()=> { 
            const ItemDetails = getList()
            ItemDetails.then(ItemDetails =>{setItem(ItemDetails)})},[] )
    
        return (      
            <div className="ItemDetails row">
               
                {Item.map(itemsDetail => 
            
                   <div key={itemsDetail.id} className="card card-detail">
                       
                        <div className="col-6">
                         
                            <img className="image-producto card-img-top-detail" src={itemsDetail.pictureUrl}  alt="imagen producto"/>
                        </div>
                        <div className="col-6">
                            <div className="card-body">
                            <h4>DETALLE DE PRODUCTO</h4>
                            <h3 className="card-title-detail" key={itemsDetail.id}>{itemsDetail.title}</h3> 
                            <p className="card-description" key={itemsDetail.id}>{itemsDetail.description}</p> 
                            <p className="card-text" key={itemsDetail.id}>{itemsDetail.price}</p>
                        <ItemCount />                      
                        <p className="card-stock" key={itemsDetail.id}>{itemsDetail.stock} Unidades disponibles</p>
                        <button className="btnVolverDetail">Volver</button>
                       </div>
                    </div>
                </div> )}
            </div>
     );
    }


export default  ItemDetail