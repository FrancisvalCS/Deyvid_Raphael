import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
          <Header/>
      </BrowserRouter>
    )
  }
}

export default App;
