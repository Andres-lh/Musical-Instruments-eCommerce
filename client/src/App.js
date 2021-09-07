import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ScrollToTop from "@components/ScrollToTop";
import Home from "@pages/Home";
import ProductDetails from "@pages/ProductDetails";
import Cart from "@pages/Cart";
import Guitars from "@pages/Guitars";
import Basses from '@pages/Basses';
import Drums from '@pages/Drums';
import Keyboards from '@pages/Keyboards';
import Orchestra from '@pages/Orchestra';
import Studio from '@pages/Studio';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    return(
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <Switch >
                    <Route exact path='/' component={Home} />
                    <Route path='/products/:id' component={ProductDetails} />
                    <Route  exact path='/cart/:id?' component={Cart} />
                    <Route exact path = '/guitars' component={Guitars} />
                    <Route exact path = '/basses' component={Basses} />
                    <Route exact path = '/drums' component={Drums} />
                    <Route exact path = '/keyboards' component={Keyboards} />
                    <Route exact path = '/orchestra' component={Orchestra} />
                    <Route exact path = '/studio' component={Studio} />
                </Switch> 
                <Footer />  
            </Router>  
        </div>
    )
}

export default App;