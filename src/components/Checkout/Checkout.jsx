
import React, {useContext} from "react"
import { useNavigate} from "react-router-dom";
import { createOrdenCompra, getProducto, updateProducto } from "../../assets/firebase"
import { CartContext } from "../../context/CartContext"
import { toast } from 'react-toastify';

const Checkout = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {cart,emptyCart, totalPrice} = useContext(CartContext);

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const valores = Object.fromEntries(datForm)
        if(valores.email === valores.emailRepeat){
            const aux = [...cart]
            aux.forEach(producto => {
                getProducto(producto.id)
                .then(prod => {
                    prod.stock -= producto.cant
                    updateProducto(producto.id, prod)
                })
            })
            
            createOrdenCompra(valores, totalPrice(), new Date().toISOString().slice(0, 10)).then(orden => {
                toast.success(`Su compra ${orden.id} se realizo exitosamente!`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                emptyCart()
                e.target.reset()
                navigate("/")
            
            }).catch(error => {
                toast.error(`Su orden no fue creada con éxito`)
            })
            
        }else{
            toast.error(`Los emails no coinciden`)
        }
    }

    return (
        <div className="container-form">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" name="apellido" required  />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailRepeat" className="form-label">Repite el mail</label>
                    <input type="email" className="form-control" name="emailRepeat" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección de Facturación</label>
                    <input type="text" className="form-control" name="direccion" required />
                </div>
                        <button type="submit" className="btn btn-dark">Finalizar Compra</button>
                        <br />
                        <br />
            </form>

        </div>
    );
}

export default Checkout;
