import Navbar from "@components/Navbar";
import Home from "@pages/Home";
import Footer from "@components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    return(
        <div className="App">
            <Router>
                <Navbar />
                <Switch >
                    <Route exact path='/' component={Home} />
                    <Route path='/products/:id' component={ProductDetails} />
                    <Route  exact path='/cart/:id?' component={Cart} />
                </Switch> 
                <Footer />  
            </Router>  
        </div>
    )
}

export default App;