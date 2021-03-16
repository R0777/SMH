import React from 'react';
import UseForm from '../UseForm/UseForm'
import Popup from '../Popup/Popup';

const AddressBook = ({ handleAddAddress, ...props }) => {

const {values, errors, handleChange, isValid} = UseForm();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { fio, tel, email } = values;
    handleAddAddress(fio, tel, email);
  }

    return (
        <Popup
        isOpen={props.isOpen}
        handleSubmit={handleSubmit}
        >
            <label className="popup__field">ФИО
              <input 
                type="text" 
                className="popup__input popup__input_name" 
                id='address-fio' 
                name="fio"
                placeholder="Введите ФИО" 
                minLength={2} 
                maxLength={40} 
                onChange={handleChange}
                value={values.fio || ''}
                required />
              <span className='popup__input-error active' id='registr-fio-error'>{(errors && props.isOpen) && errors.fio}</span>
            </label>

          <label className="popup__field">Телефон
              <input 
                type="text" className="popup__input popup__input_tel" 
                id='address-tel'
                pattern="^\d{3}-\d{3}-\d{2}-\d{2}$"
                name="tel"
                placeholder="999-999-99-99" 
                minLength={13} 
                maxLength={13}
                onChange={handleChange} 
                value={values.tel || ''}
                required />
              <span className='popup__input-error active' id='registr-tel-error'>{(errors && props.isOpen) && errors.tel}</span>
          </label>

          <label className="popup__field">Email
              <input 
                type="email" 
                className="popup__input popup__input_email" 
                id='address-email' 
                name="email"
                placeholder="Укажите email"  
                minLength={6} 
                maxLength={40}
                onChange={handleChange} 
                value={values.email || ''}
                required />
              <span className='popup__input-error active' id='registr-email-error'>{(errors && props.isOpen) && errors.email}</span>
          </label>

            <button type="submit" className={isValid ? 'popup__save' :'popup__save inactive'}>Добавить запись</button>

        </Popup>
    );
}

export default AddressBook;