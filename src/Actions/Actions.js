import {incre, decre} from './ActionCreators'
import {fdLoading , fdSuccess,fdFailure} from './ActionCreators'
import {loginLoading , loginSuccess  ,loginFailure} from './ActionCreators'
import axios from 'axios';
import {customer_base_url} from '../Config/BaseUrl'

import {toast} from 'react-toastify'
 

export const loginFunction = (data) =>{
    return (dispatch)=>{
        dispatch(loginLoading)
        axios.post(customer_base_url + 'login-customer' , data).then((res)=>{
            console.log(res)
            console.log(res.data)
            if(res.status == 200 && res.data.message && typeof(res.data.message) == "string")
            {
                toast.success(res.data.message)

            }
            dispatch(loginSuccess(res.data))
        }).catch((err)=>{
            console.log(err.response)
            if(err.response.data && err.response.data.message && typeof(err.response.data.message) == 'string')
            {
                toast.error(err.response.data.message)
            }
            dispatch(loginFailure(err.response.data))
        })

    }

}



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

