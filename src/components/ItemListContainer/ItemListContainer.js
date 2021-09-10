import { useState } from 'react'
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    return (
        <div>
            <div>
               <ItemList />
            </div>
        </div>
      
    );
}

export default  ItemListContainer