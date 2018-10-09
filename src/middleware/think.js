export default (store) => (next) => (action) => { //action is whatever was returned from actions/index.js signUp function
    if (typeof action !== 'function') {
        return next(action);
    } 

    return action(store.dispatch); //-- > line 5 from actions/index.js after the return keyword is called  
}