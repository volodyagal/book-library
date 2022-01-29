import React from 'react';
import './Modal.scss';

const Modal = (props) => {
    const {active, setActive} = props;
    return (
        <div className={`myModal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className={`modal-content ${active ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
