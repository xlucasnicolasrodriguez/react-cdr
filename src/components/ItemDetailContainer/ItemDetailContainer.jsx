/* import './ItemDetailContainer.css';
import React, {useState, useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { listaPeliculas } from '../baseDatos/baseDatos';

const films = listaPeliculas;

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [detalleId]);

    return(
        <div className="containerItemDetail">
            <ItemDetail data={data}/>
        </div>
    );
} */

import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducto } from '../../assets/firebase.js'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, []);

    return (
        
        <div>
            <div className= "card mb-3 container itemDetail">
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
