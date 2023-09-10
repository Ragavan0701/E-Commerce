import React from 'react'
import Home from '../header/Home'
import FlashDeals from '../flashDeals/FlashDeals'
import Data from '../header/Data'
import TopCate from '../top/TopCate'

const Pages = ({productItems, addToCart,CartItem}) => {
  return (
    <>
        <Home CartItem= {CartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate/>
    </>
  )
}

export default Pages