import Navbar from "@components/Navbar";
import Home from "@pages/Home";
import Footer from "@components/Footer";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

    return(
        <div className="App">
            <Router>
                <Navbar />
                <Switch >
                    <Route exact path='/' component={Home} />
                </Switch> 
                <Footer />  
            </Router>  
        </div>
    )
}

export default App;