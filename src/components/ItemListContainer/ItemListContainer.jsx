
    import {useState, useEffect} from 'react';
    import ItemList from '../ItemList/ItemList.jsx';
    import {getProductos} from '../../assets/firebase.js'
    import { useParams } from 'react-router-dom';
    
    const ItemListContainer = () => {
    
        const [productos, setProductos] = useState([]);
        const {category} = useParams()
    
        useEffect(() => {
            if(category) {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.categ === parseInt(category)).filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            } else {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }
            
        },[category]);
        
        return (
            <div className= 'row cardProductos' >
                <h2 className='obras-title' >OBRAS {category}</h2>
                {productos}
            </div>
        );
    }
    
    export default ItemListContainer;
    