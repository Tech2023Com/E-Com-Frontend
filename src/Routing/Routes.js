import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from '../Screens/Home'
import About from '../Screens/About'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Product_View  from '../Screens/Product_View'



const Routing = ()=>{



    return(

        <>
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/home'  element={<Home/>} />
            <Route path='/about'  element={<About/>} />
            <Route path='/product_view/:id'  element={<Product_View/>} />
            <Route path='*'  element={<Home/>} />
        </Routes>
        </>

    )


}

export default Routing


