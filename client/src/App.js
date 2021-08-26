import Navbar from "@components/Navbar";
import Home from "@pages/Home";
import Footer from "@components/Footer";
import ProductDetails from "./pages/ProductDetails";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    return(
        <div className="App">
            <Router>
                <Navbar />
                <Switch >
                    <Route exact path='/' component={Home} />
                    <Route path='/products/:id' component={ProductDetails} />
                </Switch> 
                <Footer />  
            </Router>  
        </div>
    )
}

export default App;