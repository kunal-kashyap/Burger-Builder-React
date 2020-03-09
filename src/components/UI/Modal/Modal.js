import React from 'react'

import Aux from '../../../HOC/auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.css'

const Modal = (props) => {
    return ( 
        <Aux>
            <Backdrop clicked={props.modalClosed} show={props.show} />
            <div className={classes.Modal} style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Aux>
            )
};

export default Modal