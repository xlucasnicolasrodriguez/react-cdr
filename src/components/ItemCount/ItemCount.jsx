/* import './ItemCount.css';
import React, { useState, useEffect } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));
    
    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

    return(
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease}>
                -
            </button>
            <span>
                {count}
            </span>
            <button disabled={count >= stock} onClick={increase}>
                +
            </button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
} */

import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial

    const agregarAlCarrito = () => {
        onAdd(contador)
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
