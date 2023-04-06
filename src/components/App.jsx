import { Container } from './App.styled';
import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import { useSelector } from 'react-redux';
import { selectError, selectOperetion } from 'redux/selectors';
import ErrorCard from './ErrorCard/ErrorCard';
import { RotatingLines } from 'react-loader-spinner';

const App = () => {
  const operetion = useSelector(selectOperetion);
  const error = useSelector(selectError);

  return (
    <Container>
      <Title title="Phonebook"></Title>
      <ContactForm />
      {error && <ErrorCard />}
      <div>
        <Title title="Contacts"></Title>
        <Filter />
        {operetion === 'fatch' && (
          <RotatingLines
            strokeColor="#188ce8"
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
