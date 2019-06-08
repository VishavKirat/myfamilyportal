import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDeatails from './components/projects/ProjectDeatails'
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
         <Route exact path='/' component = {Dashboard}/>
         <Route exact path='/post/:id' component = {ProjectDeatails}/>
        </Switch>
       
      </div>
    </BrowserRouter>
    );
}

export default App;
