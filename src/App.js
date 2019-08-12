import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

import './App.css';


class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar/>
        <Switch>  
          <Route exact path='/about' render= { () =>
            <About/>
          }/>
          <Route exact path='/skills' render= { () =>
            <Skills/>
          }/>
        </Switch>  
      </div>
    );
  } 
}

export default App;
