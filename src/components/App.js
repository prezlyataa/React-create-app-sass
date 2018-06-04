import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { FirstPage } from '../components/FirstPage';
import { SecondPage } from '../components/SecondPage'
import './App.css';

class App extends Component {
    render() {
        return (
           <div className='appContainer'>
               <ul>
                   <li><Link to="/">First page</Link></li>
                   <li><Link to="/secondPage">Second page</Link></li>
               </ul>
               <hr/>
               <Switch>
                   <Route exact path='/' component={ FirstPage }/>
                   <Route path='/secondPage' component={ SecondPage }/>
               </Switch>
           </div>
        );
    }
}

export default App;