
import { useContext } from "react";
import {Link} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({producto}) => {

    const {cart, isInCart, addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
    }
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={producto.image} alt="" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{producto.title}</h5>
                    <p className='card-text'>Descripcion: {producto.abstract}</p>
                    <p className='card-text'>Price: ${producto.price}</p>
                    <p className='card-text'>Stock: {producto.stock} productos</p>
                    <ItemCount stock = {producto.stock} onAdd={onAdd}/> <br />
                    <button className="btn btn-dark"><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
