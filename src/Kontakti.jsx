import React from 'react'
// import { Switch, Route } from 'react-router-dom'
// import FullRoster from './FullRoster'
// import Player from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
const Kontakti = () =>{
  return (
      
<div class="card">
<img src="https://cdn.hipwallpaper.com/i/62/72/IhUTmk.jpg" class="card-img" alt="..."></img>


<div class="card-img-overlay">


  

<div class="card-body text-white">
  <h5 class="card-title text-lg-left font-weight-bold">Rīga-11 - LV1011
</h5>
  <p class="card-text text-lg-left ">Mob.tel: 29876543</p>
  <p class="card-text text-lg-left">E-pasts: ___@______.lv </p>
  
  
</div>
<div class="card-footer text-muted">
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
  )
}

// (
//   <Switch>
//     <Route exact path='/roster' component={FullRoster}/>
//     <Route path='/roster/:number' component={Player}/>
//   </Switch>
// )


export default Kontakti
