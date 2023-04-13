import React ,{useState , useEffect}  from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import {customer_base_url} from '../Config/BaseUrl'
import {useNavigate} from 'react-router-dom'
import { loginFunction } from "../Actions/Actions";
import {useDispatch} from 'react-redux'



import '../Styles/Reg.css'


const Register =  () =>{
    const navigate = useNavigate()
    const dispatch =  useDispatch()

    const [values , setValues ] =  useState({

        email : "",
       
        password  : "",

    })








    const handleForm = (e) =>{

        setValues({...values , [e.target.name] : e.target.value})

    }

    const handleSubmit = () =>{
        let email_regex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       

       
        if(email_regex.test(values.email) === false){
            // console.log(values)
            toast.warn('Please Enter A valid Email ID')
        }
        
        else if(values.password == "")
        {
            toast.warn("Please enter Password")
        }
        else{
            dispatch(loginFunction(values))
        }
    }


return(
    <>
    <div class="reg-container">
        <div className="card">


        <div class="container">
  

<div class="row">
    <div class="col-sm">
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input name="email" value={values.email} onChange={handleForm} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    </div>
  </div>



     
  <div class="row">
    <div class="col-sm">
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input name="password" value={values.password} onChange={handleForm} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    </div>
    </div>
     
    
    <div class="row">
    <div class="col-sm">
        <h6 style={{textAlign:"center"  ,marginTop:'10px', marginBottom:'10px'}}><i>Don't Have an account ? </i>  <span onClick={()=>navigate('/register')} style={{color:"blue" , cursor:"pointer" }}><u>Register Here !!</u></span> </h6>    
    </div>
  </div>
     
    <div class="row">
    <div class="col-sm">
  <button  style={{width:'100%' , backgroundImage:'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'}} onClick={handleSubmit} class="btn btn-primary">Submit</button>
    
    </div>
  </div>
    
  </div>
  </div>
    </div>
    </>
)


}

export default Register