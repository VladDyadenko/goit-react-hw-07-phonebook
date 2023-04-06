import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FaUserPlus } from 'react-icons/fa';
import { Btn, Form, Input, Label } from './ContactsForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/operetions';
import { selectContacts, selectOperetion } from 'redux/selectors';
import { Audio } from 'react-loader-spinner';

function ContactForm() {
  const items = useSelector(selectContacts);
  const operetion = useSelector(selectOperetion);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const addContact = ({ name, phone }) => {
    const newContact = { name, phone, id: nanoid() };

    if (
      items.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContacts(newContact));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const iconStyles = { fill: '#FFFFFF', marginLeft: '10px' };
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        addContact({ name, phone });
      }}
    >
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handlChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handlChange}
        />
      </Label>
      <Btn type="submit">
        {operetion === 'add' ? (
          <Audio
            height="30"
            width="100"
            color="#ffffff"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        ) : (
          <>
            Add contact
            <FaUserPlus style={iconStyles} size={20} />
          </>
        )}
      </Btn>
    </Form>
  );
}

export default ContactForm;
