/* import React from 'react';
import './App.css'
import Navbar from './Navbar/Navbar';
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () =>{
    return(
        <>
            <Navbar/>
            <ItemListContainer greeting={"F O U R - S E A S O N S - D R A W I N G"} />
        </>
    );
}


export default App */
import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;