import { Container } from './App.styled';
import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import { useSelector } from 'react-redux';
import { selectError, selectPending } from 'redux/selectors';
import ErrorCard from './ErrorCard/ErrorCard';
import { RotatingLines } from 'react-loader-spinner';

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
        {panding && (
          <RotatingLines
            strokeColor="green"
            strokeWidth="5"
            animationDuration="0.75"
            width="60"
            visible={true}
          />
        )}
        <ContactList />
      </div>
    </Container>
  );
};

export default App;
