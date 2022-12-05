import { useState, createContext} from 'react';
import { toast } from "react-toastify";

const CartContext = createContext([])

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = cart.findIndex(prod => prod.id === producto.id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setCart(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }

            setCart([...cart, nuevoProducto])
        }
        
    }

    const emptyCart = () => {
        return setCart([])
    }
   
    const removeItem = (id) => {
        toast.warning(`PRODUCTO ELIMINADO`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.price), 0)
    }
    console.log(cart)
    return (
        <CartContext.Provider value = {{cart, isInCart, addItem, emptyCart, removeItem, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

}

export {CartContextProvider, CartContext}