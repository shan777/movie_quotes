import React, { Component } from 'react';
import { connect } from 'react-redux';

//this is the ***** higher order component *****
//just a function w/ class in it
export default (WrappedComponent) => { //higher order component returns the class
    class Auth extends Component {
        componentDidMount() {
            this.checkAuth(); //check if they are allowed here
        }

        componentDidUpdate() { //rechecked if they are allowed there
            this.checkAuth();
        }

        checkAuth() {
            if(!this.props.auth) {
                this.props.history.push('/sign-in');
            }
        }

        render() {
            return <WrappedComponent log={this.log}/>;
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.user.auth
        }
    }
    
    return connect(mapStateToProps)(Auth);
}