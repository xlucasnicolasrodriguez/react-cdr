import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducto } from '../../assets/firebase.js';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, );

    return (
        
        <div>
            {
            producto.id ?
            <div className= "card mb-3 container item-detail">
                <ItemDetail producto={producto}/>
            </div>
            : 
            <div>
                <h1 className='error-page'>PRODUCTO INEXISTENTE</h1>
            </div>
            }
        </div>
    );
}

export default ItemDetailContainer;
