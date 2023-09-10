
import './App.css';
import Header from './common/header/Header'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Pages from './common/pages/Pages';
import Data from "./common/header/Data"
import {useState} from 'react'
import Cart from './common/cart/Cart'
import Sdata from "./common/header/Sdata"
function App() {

  const {productItems} = Data 
  const {shopItems} =Sdata
  const [CartItem, setCardItem] =useState([])




  const addToCart = (product) => {
    if (!product || !product.id) {
      // Handle the case where the product or its id is not defined.
      return;
    }
    const productExit = CartItem.find((item) => item.id === product.id)
    console.log(product)
    if(productExit){
      setCardItem(CartItem.map((item) => 
      (item.id === product.id ? {...productExit, qty: productExit.qty + 1 }:item)))
    }
    else{
      setCardItem([...CartItem, { ...product, qty:1}])
    }
  }
  const decreaseQty = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)

    
    if (productExit.qty === 1) {
      setCardItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCardItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
    <Router>
        <Header  CartItem={CartItem}/>
        <Routes>
           <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} />}>
              
           </Route>
           <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>}>
              
           </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
