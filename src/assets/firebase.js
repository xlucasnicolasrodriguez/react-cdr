import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDK0wI9kgmbbA67haZI27NqfIoq5FjzBaI",
    authDomain: "magrit-react-ii.firebaseapp.com",
    projectId: "magrit-react-ii",
    storageBucket: "magrit-react-ii.appspot.com",
    messagingSenderId: "994258872024",
    appId: "1:994258872024:web:651b5bb1004071426b19ad"
    };

const app = initializeApp(firebaseConfig);

const db = getFirestore()

const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "productos",id))
    let item
    if(prod.data()) {
        item = {...prod.data(), id: prod.id}
    } else {
        item = "Producto no encontrado"
    }
    
    return item
}

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            title: prod.title,
            abstract: prod.abstract,
            categ: prod.categ,
            stock: prod.stock,
            price: prod.price,
            image: prod.image
        })
    })
}

const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "productos"), {
        title: objProducto.title,
        abstract: objProducto.abstract,
        categ: objProducto.categ,
        stock: objProducto.stock,
        price: objProducto.price,
        image: objProducto.image
    })

    return estado
}

const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "productos",id), info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db,"productos", id))
    return estado
}

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        dni: cliente.dni,
        celular:cliente.celular,
        direccion: cliente.direccion,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}
