import { Link } from "react-router-dom";
const Secciones = () => {
    return ( 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className='nav-link' to="/">
                        <button className='btn btn-dark'><i className="fas fa-home fa-lg"></i></button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/1">
                        <button className='btn btn-dark'><i> </i></button>
                        Magritte 1 9 2 0
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/2">
                        <button className='btn btn-dark'><i></i></button>
                        Magritte 1 9 3 0
                    </Link>
                </li>
            </ul>

    );
}

export default Secciones;