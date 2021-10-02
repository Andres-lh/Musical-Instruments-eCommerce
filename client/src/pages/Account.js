import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Navbar from "@components/Navbar";

const Account = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        history.push('/');
    }

    return(
        <div>
            <Navbar />
            <h1>Account</h1>
            <button onClick={logout}>Log Out</button>
        </div>
        
        
    )
}

export default Account;