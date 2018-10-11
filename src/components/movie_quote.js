import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';

class MovieQuote extends Component {
    componentDidMount() {
        this.props.getMovieQuote();
    }

    render() {
        return(
        <div className="center">
            <h2>Movie Quote!</h2>
            <h4>{this.props.quote}</h4>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, {
    getMovieQuote: getMovieQuote
}) (MovieQuote);