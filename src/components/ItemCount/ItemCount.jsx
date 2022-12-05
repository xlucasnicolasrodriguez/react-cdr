import {useState} from 'react';
import { toast } from "react-toastify";

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const agregarAlCarrito = () => {
        onAdd(contador)
        toast.success(`PRODUCTO AGREGADO`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            <button onClick={decrementar} className='btn btn-light botItem'><i className="fas fa-minus"></i></button>
                    {contador}
            <button onClick={incrementar} className='btn btn-light botItem'><i className="fas fa-plus"></i></button>
            <button className="btn btn-dark" onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button>
        </>
    );
}

export default ItemCount;
