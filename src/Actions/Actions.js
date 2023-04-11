import {incre, decre} from './ActionCreators'
import {fdLoading , fdSuccess,fdFailure} from './ActionCreators'



export const handleFetch  = () =>{
    return (dispatch ) =>{
        dispatch(fdLoading())
        fetch('https://jsonplaceholder.typicode.com/photos/').then(res=> res.json()).then((result)=>{
            dispatch(fdSuccess(result))
        }).catch((err)=>{
            dispatch(fdFailure(err))
        })
    }
}




export const handleIncrement = (data)=>{
return (dispatch) =>{
   dispatch( incre(data))
}
}

export const handleDecrement = (data)=>{
    return (dispatch) =>{
       dispatch( decre(data))
    }
}

