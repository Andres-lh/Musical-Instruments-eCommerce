import { SIGNIN, SIGNIN_FAILURE, SIGNUP, SIGNUP_FAILURE, LOGOUT } from '@constants/actionTypes';

const authReducer = (state = { data : null }, action) => {
    switch(action.type){
        case SIGNIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, data: action.data, error: null }
        case SIGNIN_FAILURE:
            return { ...state, data: null, error: action.error }
        case SIGNUP:
            return { ...state, data: action.data, error: null }
        case SIGNUP_FAILURE:
            return { ...state, data: null, error: action.error}
        case LOGOUT:
            localStorage.clear();
            return { ...state, data: null, error: null }
        default:
            return state;
    }
}

export default authReducer;