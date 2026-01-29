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
import Auth from "@pages/Auth";
import Account from "@pages/Account";
import PrivateRoute from "./routing/PrivateRoute";
import CustomRoute from "./routing/CustomRoute";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    return(
        <div className="App">
            <Router>
                <ScrollToTop />
                <Switch >
                    <CustomRoute exact path='/' component={Home} footer={true}/>
                    <CustomRoute path='/products/:id' component={ProductDetails} footer={true} solidNav={true}/>
                    <CustomRoute exact path='/cart/:id?' component={Cart} footer={true} solidNav={true}/>
                    <CustomRoute exact path = '/guitars' component={Guitars} footer={true} solidNav={true}/>
                    <CustomRoute exact path = '/basses' component={Basses} footer={true} solidNav={true} />
                    <CustomRoute exact path = '/drums' component={Drums} footer={true} solidNav={true} />
                    <CustomRoute exact path = '/keyboards' component={Keyboards} footer={true} solidNav={true} />
                    <CustomRoute exact path = '/orchestra' component={Orchestra} footer={true} solidNav={true} />
                    <CustomRoute exact path = '/studio' component={Studio} footer={true} solidNav={true} />
                    <CustomRoute exact path = '/auth' component={Auth} />
                    <PrivateRoute exact path = '/account' component={Account}  />
                </Switch>  
            </Router>  
        </div>
    )
}

export default App;