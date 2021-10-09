import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn, signUp } from '@actions/authActions';

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState({
        username : '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    useEffect(()=> {
        if(localStorage.getItem('profile')){
            history.push('/account');
        }
    })

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value })
    }

    const switchAuth = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            dispatch(signUp(user, history));
        } else {
            dispatch(signIn(user, history));
        }
    }

    console.log(user);
    return(
        <div className="auth">
            <div className="auth_container">
                <h1>{isSignUp ? 'Register' : 'Login'}</h1>
                <form onSubmit={handleSubmit}>
                    {isSignUp ? (
                        <>
                            <div className = "auth_container-input">
                                <input type="text" name="username" id="username" value={user.username} required onChange={onChangeInput} />
                                <label>Username</label>
                            </div>
                            <div className = "auth_container-input">
                                <input type="text" name="email" id="email" value={user.email} required onChange={onChangeInput}/>
                                <label>Email</label>
                            </div>
                            <div className="auth_container-input"> 
                                <input type="password" name="password" id="password" value={user.password} required onChange={onChangeInput}/>
                                <label>Password</label>
                            </div>
                            <div className="auth_container-input"> 
                                <input type="confirm-password" name="confirm-password" id="confirm-password" value={user.confirmPassword} required onChange={onChangeInput}/>
                                <label>Confirm Password</label>
                            </div>
                        </>
                        ) : (
                            <>
                                <div className = "auth_container-input">
                                    <input type="text" name="email" id="email" value={user.email} required onChange={onChangeInput}/>
                                    <label>Email</label>
                                </div>
                                <div className="auth_container-input"> 
                                    <input type="password" name="password" id="password" value={user.password} required onChange={onChangeInput}/>
                                    <label>Password</label>
                                </div > 
                            </>
                        )
                    } 
                    { isSignUp ? (
                        <>
                            <p>Already have an account? <span onClick={switchAuth}> Log In</span></p>
                        </>
                        ) : (  
                        <> 
                            <p>No account yet? <span onClick={switchAuth}> Create one!</span></p>
                        </>
                    )}

                    <div>
                        <button className="auth_container-button" type="submit">{isSignUp ? 'Create Account' : 'Log In' }</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Auth;