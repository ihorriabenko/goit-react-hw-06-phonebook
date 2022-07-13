import PropTypes from 'prop-types';

import s from './users.module.css';

import { connect } from 'react-redux';
import { filterUser, removeUser } from 'redux/actions';

const Users = ({ removeUser, getFilteredUsers, handleFilter }) => {
  const elements = getFilteredUsers.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name}: {number}{' '}
      <button className={s.btn} onClick={() => removeUser(id)}>
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <label>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          placeholder="enter the name"
          onChange={handleFilter}
        ></input>
      </label>
      <ul>{elements}</ul>
    </>
  );
};

Users.propTypes = {
  removeUser: PropTypes.func.isRequired,
  getFilteredUsers: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  handleFilter: PropTypes.func.isRequired,
};

const filteredUsers = (allUsers, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allUsers.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
  getFilteredUsers: filteredUsers(items, filter),
});

const mapDispatchToProps = dispatch => ({
  removeUser: id => dispatch(removeUser(id)),
  handleFilter: e => dispatch(filterUser(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
