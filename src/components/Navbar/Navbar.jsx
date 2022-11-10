/* 
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <img src={logo} alt="logo" height="60px"/>
                <a className="navbar-brand" href="#">Four Seasons Drawing</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"></a></li>
                        <li><a className="dropdown-item" href="#"></a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#"></a></li>
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
 */


import './NavBar.css';
import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import logo from './logotype.png'

export const NavBar = () => {
    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <img src={logo} alt="logo" height="60px"/>
                    <div className="navbar-brand">
                        <NavLink className="nav-link" to='/'>Four Seasons Drawing</NavLink>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <NavLink className="nav-link" to='/categoria/films'>
                                Peliculas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/categoria/series'>
                                Series
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/cart'>
                                <CartWidget/>
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
}