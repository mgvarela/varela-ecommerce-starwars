import { useState } from 'react'
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
    return (
        <div>
         {/* Coming Soon   <div className="coming-soon"> 
               <h2>COMING SOON</h2>
                 <h1>OFERTAS INCREIBLES!</h1>
            </div>
            */}
            <div>
               <ItemCount initial="1" />
            </div>
        </div>
      
    );
}

export default  ItemListContainer