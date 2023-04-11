import {FD_LOADING ,FD_SUCCESS , FD_FAILURE}  from '../Actions/Types'




const FD =  (state,  action) =>{

    if(typeof state == 'undefined')
    {
        return {
            loading :  false,
            data : [],
            error : {}
        }
    }

    switch(action.type){
        case FD_LOADING :
            return {
                ...state,
                loading : true,
                data:[],
                error :{}
            }
        case FD_SUCCESS :
            return{
                ...state ,
                loading :  false,
                data : action.data,
                error:{}

            }    
        case FD_FAILURE :
            return{
                ...state ,
                loading :  false,
                data : [],
                error:action.error

            }
        default:
            return state    

    }


}

export default FD