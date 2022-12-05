import './app.css'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CartContextProvider } from '../context/CartContext';
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Checkout from './Checkout/Checkout';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Error from './Error/Error';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
          <Header/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<Error/>}/>
          </Routes>
          <ToastContainer/>
          <Footer/>
        </CartContextProvider>   
      </BrowserRouter>
    </>
  );
}

export default App;