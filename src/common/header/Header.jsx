import React from 'react'
import Head from './Head'
import './Header1.css'
import Search from './Search'
import Navbar from './Navbar'

const Header=( {CartItem} )=> {
    return(
    <>
        <Head/>
        <Search CartItem={CartItem} />
        <Navbar/>

    </>
    )
    
}

export default Header