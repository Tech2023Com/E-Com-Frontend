import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from '../Screens/Home'
import About from '../Screens/About'
import Login from '../Screens/Login'
import Register from '../Screens/Register'



const Routing = ()=>{



    return(

        <>
        <Routes>
            <Route path='/'  element={<Login/>} />
            <Route path='/register'  element={<Register/>} />
            <Route path='/login'  element={<Login/>} />
            <Route path='*'  element={<Login/>} />
        </Routes>
        </>

    )


}

export default Routing


