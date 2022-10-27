
const FormBusqueda = () => {
    return (
        <div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Art Seeker" aria-label="Search" />
                    <button className="btn btn-outline-warning" type="submit">Buscar</button>
                </form>
        </div>
    );
}

export default FormBusqueda;
