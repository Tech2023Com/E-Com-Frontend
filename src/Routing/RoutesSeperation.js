import React from 'react'
import {useSelector} from 'react-redux'
import Route1 from './Routes'
import AuthRoute from './AuthRoutes'
import Navbar from '../Navbar/Nav'





const FinalRouting = () =>{


    const Auth = useSelector((state)=> state.Login.data && 
    state.Login.data.data && state.Login.data.data._id
    && state.Login.data.data._id != "" && state.Login.data.data._id != null 
    && state.Login.data.data._id  != 'undefined' ? true :  false
    )

    return(
        <>
        {Auth == true  ? <> <Navbar/> <Route1/>  </> : <AuthRoute/>}
        
        </>
    )


}

export default FinalRouting