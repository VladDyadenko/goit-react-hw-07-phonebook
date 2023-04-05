import { AiOutlinePhone } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

import {
  Box,
  Btn,
  ContactName,
  ContactNumber,
  List,
} from './ContactList.styled';
import { deleteContacts, fetchContacts } from 'redux/operetions';
import { useDispatch, useSelector } from 'react-redux';
import Massege from 'components/Massege';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';

const ContactList = () => {
  const svgStylePhon = { fill: '#006400', marginRight: '8px' };
  const svgStyleUser = { fill: '#FF4500', marginLeft: '8px' };
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getContactOnFilter = () => {
    if (filter !== '') {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(({ contact:{name} }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };
  const contactsProcessedFilters = getContactOnFilter();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contactsProcessedFilters.length > 0 ? (
        <Box>
          {contactsProcessedFilters.map(({ id, contact }) => (
            <List key={contact.id}>
              <AiOutlinePhone style={svgStylePhon} size={20}></AiOutlinePhone>
              <ContactName>{contact.name}</ContactName>
              <ContactNumber>{contact.phone}</ContactNumber>
              <>
                <Btn type="button" onClick={e => dispatch(deleteContacts(id))}>
                  Delete{' '}
                  <FaTrashAlt style={svgStyleUser} size={15}></FaTrashAlt>
                </Btn>
              </>
            </List>
          ))}
        </Box>
      ) : (
        <Massege>No Massege</Massege>
      )}
    </>
  );
};

export default ContactList;
// contact:{ id, name, phone}
