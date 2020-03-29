import React from 'react'

import classes from './style.css'

const FormElement = (props) => {

    var chandler = (e) => {
        props.chandler(e.target.name, e.target.value)
    }

    let formElement;
    switch(props.formType){
        case 'input':
            formElement = <input onChange={(e) => chandler(e)} className={classes.formData} {...props}/>
            break;    
        case 'textarea':
            formElement = <textarea onChange={(e) => chandler(e)} className={classes.formData} {...props}/>
            break;
        case 'select':
    formElement = <select onChange={(e) => chandler(e)} className={classes.formData} {...props}>{props.children}</select>
            break;
        case 'default':
            formElement = <input onChange={(e) => chandler(e)} className={classes.formData} {...props}/>
            break;    
    }

    return (
        <div className={classes.FormElement}>
            <label className={classes.formLabel}>{props.label}</label>
            {formElement}
            {props.errorMessage && <p className={classes.errorMesg}>{props.errorMessage}</p>}
        </div>
    )
}

export default FormElement