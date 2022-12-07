import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-page'>
            <h1 className='carrito-vacio-size' >ERROR 404 </h1>
            <br />
            <Link to='/'><button className='btn btn-dark'>Volver al inicio</button></Link>
            <br />
        </div>
    );
}

export default Error;