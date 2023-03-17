import React from 'react'
import {Link} from 'react-router-dom';

import Dclock from "./Dclock";


const NavBar =(props)=>{
   return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><div class="circle"><strong className='text-primary'>News</strong><strong>24x7</strong></div></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
       
        <li className="nav-item"><Link className="nav-link active" to="/business">Business </Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/">General</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/travel">Travel</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="https://www.autoexpo-themotorshow.in/">AutoExpo</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="https://ashishkumarchakrawarti.github.io/TechInfo/">IT Sector</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/photos">Photo</Link></li>
        <li><Dclock/></li>
       </ul>
    
      </div>
    </div>
    </nav>
    </div>
    )
  }


export default NavBar




