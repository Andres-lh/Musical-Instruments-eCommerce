import { SIGNIN, SIGNIN_FAILURE, SIGNUP, SIGNUP_FAILURE} from '@constants/actionTypes';
import * as api from '@api/api';

export const signIn = (userData, history) => async (dispacth) => {
    try {
        const { data } = await api.login(userData);
        console.log(data)
        dispacth({
            type: SIGNIN,
            data: data.user
        })

        history.push('/')
    } catch (error) {
        console.log(error.response.data.msg);
        dispacth({
            type: SIGNIN_FAILURE,
            error: error.response.data.msg
        })
    }
}

export const signUp = (userData) => async(dispatch) => {
    try {
        const { data } = await api.register(userData);
        console.log(data)
        dispatch({
            type: SIGNUP,
            data: data.newUser
        })
    } catch (error) {
        dispatch({
            type: SIGNUP_FAILURE,
            error: error.response.data.msg
        })
    }
}