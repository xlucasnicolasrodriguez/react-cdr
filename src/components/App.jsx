import React from 'react';
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


export default App