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
            // err.response.data //---> node backend 
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Error creating account'
            });
        }
    }
}

export const signIn = userInfo => async dispatch => { //exactly same as line 4 & 5 above
    try {
        const resp = await axios.post('http://api.reactprototypes.com/signin', userInfo); //making request to server
        
        // console.log('sign in response: ', resp);

        localStorage.setItem('token', resp.data.token); //localStorage is just an object that has a special meaning in JS
        // can even do -> localStorage.token = resp.data.token;

        dispatch({ //checking if logged in or not 
            type: types.SIGN_IN
        });
    } catch (err) {
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid Email and/or Password'
        });
    }
}

export const signOut = () => {

    localStorage.removeItem('token');
    
    return {
        type: types.SIGN_OUT
    }
}

export const getMovieQuote = () => async dispatch => {
    try {

        const axiosConfig = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        };

        const resp = await axios.get('http://api.reactprototypes.com', axiosConfig);

        dispatch({
            type: types.GET_MOVIE_QUOTE,
            quote: resp.data.message
        });

        // console.log('Movie Quote Response: ', resp);
    } catch(err) {
        console.log('Movie Quote Error: ', err.message);
    }
}