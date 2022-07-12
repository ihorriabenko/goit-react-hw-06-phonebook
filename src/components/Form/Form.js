// import { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './form.module.css';

const Form = ({ onSubmit }) => {
  const [user, setUser] = useState({
    name: '',
    number: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...user });

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

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit({...this.state});
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//         <form className={s.form} onSubmit={this.handleSubmit}>
//           <label className={s.label}>
//             Name
//             <input className={s.input}
//               value={name}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={s.label}>
//             Number
//             <input className={s.inputt}
//               value={number}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <button className={s.btn} type="submit">Add contact</button>
//         </form>
//     );
//   }
// }

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
