import types from './types';
import axios from 'axios';

export const signUp = (userInfo) => {
    return async (dispatch) => { //action creator 
        try { //try..catch block -> this is javascript.. this handles error
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);

            console.log('Sign up response: ', resp);
        } catch (err) {
            console.log('sign up error: ', err.message); //all err has message property
        }
    }
}
