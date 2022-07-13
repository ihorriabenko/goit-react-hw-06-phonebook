// import PropTypes from 'prop-types';

import s from './users.module.css';

// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { filterUser, removeUser } from 'redux/actions';
import { getfilteredUsers } from 'redux/selectors';


// const Users = ({ removeUser, getFilteredUsers, handleFilter }) => {
const Users = () => {
  // const items = useSelector(({ contacts: { items, filter } }) =>
  //   filteredUsers(items, filter)
  // );
  const users = useSelector(getfilteredUsers)
  const dispatch = useDispatch();

  const onRemoveUser = id => dispatch(removeUser(id));
  const onHandleFilter = e => dispatch(filterUser(e.target.value));

  const elements = users.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name}: {number}{' '}
      <button className={s.btn} onClick={() => onRemoveUser(id)}>
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
          onChange={onHandleFilter}
        ></input>
      </label>
      <ul>{elements}</ul>
    </>
  );
};

// Users.propTypes = {
//   removeUser: PropTypes.func.isRequired,
//   getFilteredUsers: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   handleFilter: PropTypes.func.isRequired,
// };

// const filteredUsers = (allUsers, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allUsers.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const mapStateToProps = ({contacts: {items, filter}}) => ({
//   getFilteredUsers: filteredUsers(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   removeUser: id => dispatch(removeUser(id)),
//   handleFilter: e => dispatch(filterUser(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users;
