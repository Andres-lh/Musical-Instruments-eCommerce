import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Guitars from './Pages/Guitars';
import Basses from './Pages/Basses';
import Drums from './Pages/Drums';
import Keyboards from './Pages/Keyboards';
import Orchestra from './Pages/Orchestra';
import Studio from './Pages/Studio';
import ProductDetails from './Pages/ProductDetails';
import ScrollToTop from "./Components/ScrollToTop";

function App() {
    return (
        <div className="App">
           <Router>
                <ScrollToTop />
               <Navbar/>
               <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  exact path='/cart/:id?' component={Cart}/>
                    <Route exact path='/guitars' component={Guitars}/>
                    <Route exact path='/basses' component={Basses}/>
                    <Route exact path='/drums' component={Drums}/>
                    <Route exact path='/keyboards' component={Keyboards}/>
                    <Route exact path='/orchestra' component={Orchestra}/>
                    <Route exact path='/studio' component={Studio}/>
                    <Route path='/products/:id' component={ProductDetails}/>
               </Switch>
               <Footer/>
           </Router>
        </div>
    );
}

export default App;
