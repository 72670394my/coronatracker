import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <a className="navbar-brand " href="/">CoronaTracker </a><span><i class="logo fas fa-virus ml-1  pt-0 "></i></span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-item navbar-collapse ml-auto" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link " href="/">Home</a>
      </li>
    
      <li className="nav-item">
        <a className="nav-link" href="/symptoms">Symptoms</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/prevention">Prevention</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      
     
    </ul>
    
  </div>
</nav>
        </>
    )
}

export default Navbar
