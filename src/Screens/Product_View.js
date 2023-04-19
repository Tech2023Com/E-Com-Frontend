import React from "react";

import {useLocation} from 'react-router-dom'





const Product_View =  () =>{


    const {state} =  useLocation()
    console.log(state)


    return(

        <>
            <img src={state.images} />
            <br>
            </br>
                <h4 style={{display:"inline-block"}} >Specifications</h4> : <h5 style={{display:"inline-block"}}>{state.specifications.join()}</h5>
        </>
    )

}

export default Product_View