import React from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './component/Home';

import Symptoms from './component/Symptoms';
import Prevention from './component/Prevention';
import Contact from './component/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Switch>
          
          <Route  exact path='/' component={Home}/>
          <Route  exact path='/symptoms' component={Symptoms}/>
          <Route  exact path='/prevention' component={Prevention}/>
          <Route  exact path='/contact' component={Contact}/>
          <Redirect to="/"/> 
        </Switch>
      </Router>
     
    </div>
  )
}

export default App
