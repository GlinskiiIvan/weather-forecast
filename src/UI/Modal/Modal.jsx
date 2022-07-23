import React from 'react';
import React_dom from 'react-dom';
import styles from './Modal.module.scss'

const Modal = (props) => {
    return (
        <React.Fragment>
            {
                React_dom.createPortal((
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            {props.children}
                        </div>
                    </div>
                    ), document.getElementById('modal'))
            }
        </React.Fragment>
    );
};

export default Modal;