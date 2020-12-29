import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Body/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ScrollToTop from "./Components/Body/ScrollToTop";

function App() {
    return (
        <div className="App">
           <Router>
                <ScrollToTop />
               <Navbar/>
               <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  exact path='/cart' component={Cart}/>
               </Switch>
               <Footer/>
           </Router>
        </div>
    );
}

export default App;
