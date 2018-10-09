import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import { renderInput } from '../helpers';

class SignUp extends Component {
    userSignUp = (values) => {
        console.log('User signup info: ', values);
        this.props.signUp(values);

    }

    render() {
        // console.log('Sign up props:', this.props);

        const { handleSubmit } = this.props; //pulling handleSubmit function from redux-form

        return(
            <div>
                <h1 className="center">Sign Up!</h1>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <Field name="email" label="Email" component={renderInput}/>
                    <Field name="password" label="Password" type="password" component={renderInput}/>
                    <Field name="confirmPassword" label="Confirm Password" type="password" component={renderInput}/>

                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn blue">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const { email, password, confirmPassword } = values;
    const errors = {};

    if(!email) {
        errors.email = "Please enter your email address";
    }

    //do regex check and say please enter valid email address

    if(!password){
        errors.password = "Please choose a password";
    }

    if(password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors ;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, {
    signUp: signUp
})(SignUp) ;