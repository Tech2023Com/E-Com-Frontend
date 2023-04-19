import  React, { useState } from 'react'
import '../Styles/Cards.css'

import {useEffect} from 'react'
import axios from 'axios'
import {customer_base_url} from '../Config/BaseUrl'

import {useNavigate} from 'react-router-dom'



const Home = () =>{

    const navigate = useNavigate()

   const [data, setData] =  useState([])



    

 useEffect(()=>{

    axios.get(customer_base_url + 'get-products').then((res)=>{
        console.log(res.data)
        setData(res.data.products)
    })

 },[])   


return(
    <>  

<div class="row">
 {data.map((el,i)=>(

<div   class="column">
    <div  onClick={()=> navigate(`/product_view/${el._id}` ,  {state :  el})} class="card">
      <img src={el.images}  style={{width : "250px" , height : "200px"}}  />
      <p>Category : {el.category}</p>
      <p>Specification : {el.specifications.join()}</p>
      <p>Price : {el.price}</p>
    </div>
  </div>
 ))}

</div>


        
    </>
)


}

export default Home