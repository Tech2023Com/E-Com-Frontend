import React ,{useState , useEffect}  from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import {customer_base_url} from '../Config/BaseUrl'
import {useNavigate} from 'react-router-dom'



import '../Styles/Reg.css'


const Register =  () =>{
    const navigate = useNavigate()

    const [values , setValues ] =  useState({

        name : "",
        email : "",
        mobile : "",
        house_no  :"",
        address : "",
        pincode: "",
        password  : "",
        lat : "",
        long : ""

    })




const getLatLong =  () =>{
    navigator.geolocation.getCurrentPosition((position) => {
        // var latText = "";
        // var longText = "";
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
    
        // latText.innerText = lat.toFixed(2);
        // longText.innerText = long.toFixed(2);

        console.log(lat , long)
        setValues({...values ,['lat'] : lat , ['long'] : long})
      });
}

useEffect(()=>{

    getLatLong()

},[])

    const handleForm = (e) =>{

        setValues({...values , [e.target.name] : e.target.value})

    }

    const handleSubmit = () =>{
        let email_regex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let mobile_regex =  /^[6-9]\d{9}$/

        if(values.name == "")
        {
            toast.warn('Please Enter Your Full Name')
        }
        else if(email_regex.test(values.email) === false){
            // console.log(values)
            toast.warn('Please Enter A valid Email ID')
        }
        else if(mobile_regex.test(values.mobile) === false){
            // console.log(values)
            toast.warn('Please Enter A valid Mobile Number')
        }
        else if(values.house_no == "")
        {
            toast.warn("Please enter your House Number")
        }
        else if(values.address == "")
        {
            toast.warn("Please enter your full Address")
        }
        else if(values.pincode == "")
        {
            toast.warn("Please enter Pincode")
        }
        else if(values.password == "")
        {
            toast.warn("Please enter Password")
        }
        else if(values.lat == 'undefined' ||  values.lat == null || values.lat == "")
        {
            toast.error("Unable to fetch your location please turn on your location")
            getLatLong()
        }
        else{
            axios.post(customer_base_url + 'add-customer' , values ).then((res)=>{
                console.log(res)
                if(res.status == 200 && res.data.messgae != "")
                {
                    toast.success(res.data.messgae)
                } 
            }).catch((err)=>{
                console.log(err)
                console.log(err.response)
                if(err.response.data && err.response.data.message != "")
                {
                    toast.error(err.response.data.message)

                }
            })
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
        <label for="exampleInputEmail1">Full Name</label>
        <input name="name" value={values.name} onChange={handleForm} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    </div>

  </div>

  {/* <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div> */}

<div class="row">
    <div class="col-sm">
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input name="email" value={values.email} onChange={handleForm} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    </div>
    <div class="col-sm">
    <div class="form-group">
        <label for="exampleInputEmail1">Mobile Number</label>
        <input name="mobile" value={values.mobile} onChange={handleForm} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    </div>
  </div>


<div class="row">
    <div class="col-sm">
    <div class="form-group">
        <label for="exampleInputEmail1">House No.</label>
        <input name="house_no" value={values.house_no} onChange={handleForm} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    </div>
    <div class="col-sm">
    <div class="form-group">
        <label for="exampleInputEmail1">Full Adddress</label>
        <input name="address" value={values.address} onChange={handleForm} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    </div>
  </div>

     
  <div class="row">
    <div class="col-sm">
    <div class="form-group">
        <label for="exampleInputEmail1">Pin  Code </label>
        <input name="pincode" value={values.pincode} onChange={handleForm} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    </div>
    <div class="col-sm">
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input name="password" value={values.password} onChange={handleForm} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    </div>
    </div>
     
    
     
     
    <div class="row">
    <div class="col-sm">
        <h6 style={{textAlign:"center",marginTop:'10px', marginBottom:'10px'}}><i>Already Have an account ? </i>  <span onClick={()=>navigate('/login')} style={{color:"blue" , cursor:"pointer" }}><u>Login Here !!</u></span> </h6>    
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