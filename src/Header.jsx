import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => 

(
    
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">

  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul class="navbar-nav ">
    <li class="nav-item ">
    <a href="#" class="nav-link  btn btn-lg active" role="button" aria-pressed="true">
    <li class="nav-item">
    <Link to='/'>Sakums</Link></li>
    </a>
    </li>
    <a href="#" class="nav-link  btn btn-lg active" role="button" aria-pressed="true">
    <li class="nav-item">
    <Link to='/Kontakti'>Kontakti</Link></li>
    </a>
    
   <li class="nav-item dropdown justify-content-center">
        <a class="nav-link  btn btn-lg active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          LV
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li class="nav-item"><Link to='/MainRU'>RU</Link></li>
        </div>
      </li>
    </ul>
  </div>
 
</nav>
)
//     <nav class="nav nav-pills justify-content-center">
//     <li class="nav-item"><Link to='/'>Home</Link></li>
//     <li class="nav-item"><Link to='/roster'>Roster</Link></li>
//     <li class="nav-item"><Link to='/schedule'>Schedule</Link></li>
    
//   </nav>


export default Header
