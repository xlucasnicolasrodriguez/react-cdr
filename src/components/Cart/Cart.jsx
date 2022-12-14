import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import { Link } from "react-router-dom";
const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? 
            <div className="carrito-vacio">
                <p className="carrito-vacio-size">NO HAY PRODUCTOS EN TU CARRITO</p>
                <Link to={'/'}><button className="btn btn-dark">Ir al inicio</button></Link>
            </div> 
            : 
            <div className=" container cartContainer">
                {cart.map((prod,indice) =><div className="card mb-3" key={indice} style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4 ">
                    <img src={prod.image} className="img-fluid rounded-start cart-image" alt="img-cart" />
                </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title">{prod.title}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio por unidad: US$ {new Intl.NumberFormat('de-DE').format(prod.price)}</p>
                            <p className="card-text">Subtotal: US$ {new Intl.NumberFormat('de-DE').format(prod.price * prod.cant)}</p>
                            <button className="btn btn-dark" onClick={() => removeItem(prod.id)}><i className="fas fa-trash-alt"></i> Eliminar Producto</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
            <div className="container-total">
                <p className="total-prods">TOTAL: US$ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                <button className="btn btn-dark buttonCarts" onClick={emptyCart}>Limpiar Carrito</button>
                <Link to="/checkout">
                    <button className="btn btn-dark buttonCarts">Finalizar Compra</button>
                </Link>
            </div>
            </div>
            }
        </>
        
    );
}

export default Cart;
