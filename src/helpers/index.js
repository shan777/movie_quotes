import React from 'react';

export const renderInput = props => {
    const {input, label, type, meta: {error, touched}} = props;

    console.log('Render Input:', props);

    return (
        <div className="row">
            <div className="col s12">
                <label>{label}</label>
                <input {...input}type={ type || 'text'} autoComplete="off" />          {/*{...input} event listener, blur, all those objects*/}
                <p className="red-text text-darken-2">{ touched && error }</p>
                {/* if touched and there is an error */}
            </div>
        </div>
    );   
}