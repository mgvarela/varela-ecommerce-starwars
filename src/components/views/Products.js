import  { useState, useEffect} from 'react';
import ItemList from '../../components/ItemList/ItemList'

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        const ropa =[
            {id:1, name: 'Remeras', title:'Remera Mangas Cortas Yoda',price:'$2000',pictureUrl:'../../remera-1.png'},
            {id:2, name: 'Camisas', title:'Camisa Jedi',price:'$3000',pictureUrl:'../../camisa-1.png'},
            {id:3, name: 'Pantalones', title:'Pantalon Deportivo Anakin',price:'$5500',pictureUrl:'../../pantalon-1.png'}
        ]
        setTimeout(() => resolve(ropa), 2000)
})}

// COMPONENTE 
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const listProducts = getProducts()
        listProducts.then(result => setProducts(result))
    }, [])

    if(products.length === 0){
        return <h1>Cargando...</h1>
    }

    return ( 
        <div stlye={{alignItems: 'center'}} className="items-catalogo">
            <h1>NUESTROS ARTICULOS</h1>    
            <ItemList products={products}/>
        </div>
    );
}

export default Products