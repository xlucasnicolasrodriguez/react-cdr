import { Link } from "react-router-dom";
const Item = ({prod}) => {
    return (
        <div className="producto">
            <div className="hovercard">
                <div className="card">
                    <img src={prod.image} className="card-img-top" alt="" />
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text d-flex justify-content-center"> US$ {new Intl.NumberFormat('de-DE').format(prod.price)}</p>
                    <p className="card-text d-flex justify-content-center">
                    <button className='btn btn-dark '><Link className='nav-link ' to={`/product/${prod.id}`}><i className=""></i>Buy Now</Link></button></p>
                </div>
            </div>
        </div>
    );
}

export default Item;
