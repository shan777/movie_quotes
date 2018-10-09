import React from 'react';
import auth from '../hoc/auth'; //importing that function
//you can put auth anywhere like here

const MovieQuote = props => {
    return(
        <div className="center">
            <h1>Movie Quote!</h1>
            <h4>You had me at hello.</h4>
        </div>
    );
}

export default auth(MovieQuote);