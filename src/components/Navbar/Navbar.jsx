import React from 'react';
import './navbar.css'
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Four Seasons Drawing</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Merch</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Ilustraciones</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pinturas</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Oleo</a></li>
                        <li><a className="dropdown-item" href="#">Acuarela</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">S A L E</a></li>
                    </ul>
                    </li>
                </ul>
                <FormBusqueda/>
                <button type="button" className="btn"><CartWidget/></button>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;
