import  React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {handleDecrement, handleIncrement} from '../Actions/Actions'


const Home = () =>{

    const dispatch = useDispatch()


    const count = useSelector((state)=> state.CountData.count ? state.CountData.count : 0 )

    const handleIncr = ()=>{

        dispatch(handleIncrement(count +1))

    }

    const handleDecr = () =>{
        dispatch(handleDecrement(count -1))

    }


return(
    <>  
        <h1>Value of Count is : {count}</h1>
        <button onClick={handleIncr} >Increment</button>
        <button onClick={handleDecr}>Decrement</button>
    </>
)


}

export default Home