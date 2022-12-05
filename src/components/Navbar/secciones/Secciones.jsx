import { Link } from "react-router-dom";
import Logo from '../../Navbar/logotype.png';
const Secciones = () => {
    return ( 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className='nav-link' to="/">
                        <button className='btn'><i className=""><img src={Logo} alt=""  className="logo"/></i></button>
                    </Link>
                </li>
                <li className="nav-item categoria">
                    <Link className='nav-link' to="/category/1920">
                        <button className='btn btn-dark'><i> </i></button>
                        Magritte 1 9 2 0
                    </Link>
                </li>
                <li className="nav-item categoria">
                    <Link className='nav-link' to="/category/1930">
                        <button className='btn btn-dark'><i></i></button>
                        Magritte 1 9 3 0
                    </Link>
                </li>
                <li className="nav-item categoria">
                    <Link className='nav-link' to="/category/1940">
                        <button className='btn btn-dark'><i></i></button>
                        Magritte 1 9 4 0
                    </Link>
                </li>
            </ul>

    );
}

export default Secciones;