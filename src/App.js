import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Rooms from './components/Rooms'
import SingleRoom from './components/SingleRoom'
import Error from './components/Error'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact component={Error}/> 
        </Switch>
    </div>  
  );
}

export default App;
