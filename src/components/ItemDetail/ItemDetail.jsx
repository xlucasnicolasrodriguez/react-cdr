
import { useContext } from "react";
import {Link} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
    }
    return (
        <div className='row g-0'>
            <div className="col-md-4 container-detail-img">
                <img src={producto.image} alt="" className="img-fluid img-detail" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className='card-title title-detail'>{producto.title}</h3>
                    <p className='card-text'>Descripcion: {producto.abstract}</p>
                    <hr />
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
