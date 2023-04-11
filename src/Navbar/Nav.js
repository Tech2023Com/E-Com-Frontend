import { useNavigate } from "react-router-dom"


const Navbar = () =>{

    const navigate = useNavigate()



    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" style={{cursor:"pointer"  }} onClick={()=>navigate('/')}>E-Com</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class={`nav-link  ${window.location.href.includes('home') ? 'active' : ""} ` } style={{cursor:"pointer"  , fontWeight:"bold", color :window.location.href.includes('home') ? 'green' : 'black' }} aria-current="page" onClick={()=>navigate('/home')}>Home</a>
              <a class={`nav-link  ${window.location.href.includes('about') ? 'active' : ""} ` } style={{cursor:"pointer" , fontWeight:"bold", color :window.location.href.includes('about') ? 'green' : 'black'}} onClick={()=>navigate('/about')}>About</a>
            </div>
          </div>
        </div>
      </nav>
    )


}

export default Navbar