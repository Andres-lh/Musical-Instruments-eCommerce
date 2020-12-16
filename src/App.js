import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About'
import Cart from './Pages/Cart'

function App() {
    return (
        <div className="App">
           <Router>
               <Navbar/>
               <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/products' component={Products}/>
                    <Route  exact path='/about' component={About}/>
                    <Route  exact path='/cart' component={Cart}/>
                    
               </Switch>
           </Router>
        </div>
    );
}

export default App;
