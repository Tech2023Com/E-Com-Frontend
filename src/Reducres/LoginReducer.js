import {LOGIN_LOADING , LOGIN_SUCCESS , LOGIN_FAILURE , LOGOUT}  from '../Actions/Types'




const Login =  (state,  action) =>{

    if(typeof state == 'undefined')
    {
        return {
            loading :  false,
            data : [],
            error : {}
        }
    }

    switch(action.type){
        case LOGIN_LOADING :
            return {
                ...state,
                loading : true,
                data:[],
                error :{}
            }
        case LOGIN_SUCCESS :
            return{
                ...state ,
                loading :  false,
                data : action.data,
                error:{}

            }    
        case LOGIN_FAILURE :
            return{
                ...state ,
                loading :  false,
                data : [],
                error:action.error

            }
        case LOGOUT :
            return{
                ...state ,
                loading :  false,
                data : [],
                error:{}

            }
        default:
            return state    

    }


}

export default Login