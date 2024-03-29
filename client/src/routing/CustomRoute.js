import { Route } from 'react-router-dom';
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const CustomRoute = ({footer, solidNav, exact, path, component: Component}) => {
    return(
        <Route exact={exact} path={path} render={(props) => (
            <div>
                <Navbar solidNav={solidNav}/>
                {footer ? (
                    <div>
                        <Component {...props}/>
                        <Footer />
                     </div>
                ) : (
                    <div>
                        <Component {...props}/>
                     </div>  
                )}
            </div>
        )} />
    )
    
}

export default CustomRoute;