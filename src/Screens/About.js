import { useEffect } from "react"
import { useSelector , useDispatch} from "react-redux"
import {handleFetch} from '../Actions/Actions'

const About = () =>{
    const dispatch = useDispatch()

    const count = useSelector((state) => state.CountData.count &&  Array.isArray(state.CountData.count) && state.CountData.count.length ? state.CountData.count : [] )
    const loading = useSelector((state) => state.FD.loading)

    useEffect(()=>{
        dispatch(handleFetch())
    },[])

    return(
        <>
        <h1>Value of Count is : {count} </h1>
       
        {loading ? "Data is Loading" :  ""}
        {count.map((d)=>(
            <h1>{d}</h1>
        ))}
        
        </>

    )
    
    
    }
    
    export default About