import { useState } from 'react';
import { addUser } from 'redux/actions';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';
import s from './form.module.css';

// const Form = ({onSubmit}) {
const Form = () => {
  const [user, setUser] = useState({
    name: '',
    number: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    // onSubmit({ ...user });
    dispatch(addUser(user))

    setUser({
      name: '',
      number: ''
    })
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={user.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.inputt}
          value={user.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (text) => dispatch(addUser(text))
// })

// export default connect(null, mapDispatchToProps)(Form);

export default Form;
