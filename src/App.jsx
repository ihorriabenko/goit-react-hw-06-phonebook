import Section from 'components/Section';
import Form from './components/Form';
import Users from './components/Users';

const App = () => {

  return (
    <div>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contancts'}>
        <Users />
      </Section>
    </div>
  );
};

export default App;
