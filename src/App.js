import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Route exact path='/add' component = {SignIn}/>
      </div>
    </BrowserRouter>
    );
}

export default App;
