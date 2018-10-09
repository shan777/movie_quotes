import types from './types';
import axios from 'axios';

export const signUp = (userInfo) => {
    return async (dispatch) => { //action creator 
        try { //try..catch block -> this is javascript.. this handles error
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);

            // console.log('Sign up response: ', resp);

            localStorage.setItem('token', resp.data.token);
            dispatch({ 
                type: types.SIGN_UP
            });
        } catch (err) {
            console.log('sign up error: ', err.message); //all err has message property
        }
    }
}

export const signIn = userInfo => async dispatch => { //exactly same as line 4 & 5 above
    try {
        const resp = await axios.post('http://api.reactprototypes.com/signin', userInfo); //making request to server
        
        console.log('sign in response: ', resp);

        localStorage.setItem('token', resp.data.token); //localStorage is just an object that has a special meaning in JS
        // can even do -> localStorage.token = resp.data.token;

        dispatch({ //checking if logged in or not 
            type: types.SIGN_IN
        });
    } catch (err) {
        console.log('Sign in error: ', err);
    }
}

export const signOut = () => {

    localStorage.removeItem('token');
    
    return {
        type: types.SIGN_OUT
    }
}
