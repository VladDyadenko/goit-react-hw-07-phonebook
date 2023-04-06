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
import { selectOperetion, selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const ContactList = () => {
  const svgStylePhon = { fill: '#006400', marginRight: '8px' };
  const svgStyleUser = { fill: '#FF4500', marginLeft: '8px' };
  const contacts = useSelector(selectVisibleContacts);
  const operetion = useSelector(selectOperetion);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length > 0 ? (
        <Box>
          {contacts.map(({ id, name, phone }) => (
            <List key={id}>
              <AiOutlinePhone style={svgStylePhon} size={20}></AiOutlinePhone>
              <ContactName>{name}</ContactName>
              <ContactNumber>{phone}</ContactNumber>
              <>
                <Btn type="button" onClick={e => dispatch(deleteContacts(id))}>
                  {operetion === id ? (
                    <RotatingLines
                      strokeColor="#ffffff"
                      strokeWidth="8"
                      animationDuration="0.75"
                      width="20"
                      visible={true}
                    />
                  ) : (
                    <>
                      Delete <FaTrashAlt style={svgStyleUser} size={15} />
                    </>
                  )}
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
