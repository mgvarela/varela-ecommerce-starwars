import Item from '../Item/Item.js'
import './ItemList.css';

const ItemList = ({products}) => {

    return (
        <div className="item-list"> 
            {products.map(prod => {
                return <Item key={prod.id} item={prod}/>
            })}
        </div>
    )
}

export default ItemList