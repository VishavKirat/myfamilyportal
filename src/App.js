import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDeatails from './components/projects/ProjectDeatails'
import CreateProject from './components/projects/CreateProject'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
         <Route exact path='/' component = {Dashboard}/>
         <Route exact path='/post/:id' component = {ProjectDeatails}/>
         <Route exact path='/signin' component = {SignIn}/>
         <Route exact path='/signup' component = {SignUp}/>
         <Route exact path='/createpost' component = {CreateProject}/>
        </Switch>
       
      </div>
    </BrowserRouter>
    );
}

export default App;
