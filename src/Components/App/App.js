import React, { useState } from 'react';
import * as api from '../../utils/api';
import './App.css';
import AddressBook from '../AddressBook/AddressBook';

const App = () => {

  const [isAddressBookOpen,
    setAddressBookOpen] = useState(true);

  const handleAddAddress = (fio, tel, email) => {
api.addAddress(fio, tel, email) 
.then((res) => {
  if ((res.status !== 401) && (res.status !== 400 ) && (res.status !== 409 )) {
  } else alert("Новый контакт добавлен! Точно");
})
.catch((err) => {
  console.log(err)
});


}
  return (
    <section className="app">
<AddressBook
      isOpen={isAddressBookOpen}
      handleAddAddress={handleAddAddress} />
    </section>
  );
}

export default App;
