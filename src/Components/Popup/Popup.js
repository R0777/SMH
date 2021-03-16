import React from 'react';
const Popup = (props) => {


    return (
        <section className={`popup ${props.isOpen && 'active'}`}>
            <form className="popup__block" noValidate onSubmit={props.handleSubmit}>
                <h4 className="popup__title">Адресная книга</h4>
                {props.children&&props.children}
            </form>
        </section>
    );
}

export default Popup;