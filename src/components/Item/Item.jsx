import { Link } from "react-router-dom";
const Item = ({prod}) => {
    return (
        <div className="card border-light mb-3 cardProducto">
                        <img src={prod.image} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{prod.title}</h5>
                            <p className="card-text">*{prod.abstract}*</p>
                            <p className="card-text"> US$ {new Intl.NumberFormat('de-DE').format(prod.price)}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/product/${prod.id}`}><i className="far fa-eye"></i></Link></button>
                    </div>
        </div>
    );
}

export default Item;
