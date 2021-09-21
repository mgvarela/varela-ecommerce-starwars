import  { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Item from '../../components/Item/Item'


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
    const {name} = useParams()
    const [products, setProduct] = useState(undefined)

    useEffect(() => {
        const listProducts = getProducts()
        listProducts.then(result => {
            const product = result.find(prod => prod.name === name)
            setProduct(product)
        })
        return (() => {
            setProduct(undefined)
        })
    }, [name])

   return (
       <Item item={products}/>
   )
}

export default Products