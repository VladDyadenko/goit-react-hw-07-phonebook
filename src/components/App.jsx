import { Container } from './App.styled';
import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectPending } from 'redux/selectors';
import ErrorCard from './ErrorCard/ErrorCard';

const App = () => {
  const panding = useSelector(selectPending);
  const error = useSelector(selectError);

  return (
    <Container>
      <Title title="Phonebook"></Title>
      <ContactForm />
      {error && <ErrorCard />}
      <div>
        <Title title="Contacts"></Title>
        <Filter />
        {panding && <Loader />}
        <ContactList />
      </div>
    </Container>
  );
};

export default App;
