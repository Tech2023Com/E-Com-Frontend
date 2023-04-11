import {INCRE , DECRE} from './Types'
import {FD_LOADING , FD_SUCCESS , FD_FAILURE} from './Types'




export const incre = (data) =>({
    type: INCRE,
    data
})


export const decre = (data) =>({
    type  :DECRE,
    data
})

export const fdLoading   = ()=>({
  type : FD_LOADING  
})
export const fdSuccess   = (data)=>({
  type : FD_SUCCESS ,
  data
})
export const fdFailure   = (error)=>({
  type : FD_FAILURE  ,
  error
})