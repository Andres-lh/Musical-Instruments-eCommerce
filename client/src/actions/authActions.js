import { SIGNIN, SIGNIN_FAILURE, SIGNUP, SIGNUP_FAILURE} from '@constants/actionTypes';
import * as api from '@api';

export const signIn = (userData) => async (dispacth) => {
    try {
        const { data } = api.login(userData);

        dispacth({
            type: SIGNIN,
            data
        })
    } catch (error) {
        dispacth({
            type: SIGNIN_FAILURE,
            error: error.response.data.error
        })
    }
}

export const signUp = (userData) => async(dispatch) => {
    try {
        const { data } = api.register(userData);
        
        dispatch({
            type: SIGNUP,
            data
        })
    } catch (error) {
        dispatch({
            type: SIGNUP_FAILURE,
            error: error.response.data.error
        })
    }
}