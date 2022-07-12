import { nanoid } from 'nanoid';
// import { Component } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser, filteredUsers,filter } from 'redux/actions';

import Section from 'components/Section';
import Form from './components/Form';
import Users from './components/Users';

const App = () => {
  const users = useSelector(store => store);
  const dispatch = useDispatch();

  const onAddUser = (data) => {
    const action = addUser(data);
    dispatch(action);
  }

  const onRemoveUser = (id) => {
    dispatch(removeUser(id));
  }

  const onFilter = ({target}) => {
    dispatch(filter(target.value));
  }

  const onFilteredUsers = () => {
    dispatch(filteredUsers());
  }

  // const [users, setUsers] = useState([]);
  // const [filter, setFilter] = useState('');

  // const addUser = ({ name, number }) => {
  //   const newUser = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };

  //   setUsers(prevUsers => [...prevUsers, newUser]);
  // };

  // const removeUser = id => {
  //   setUsers(prevUsers => prevUsers.filter(item => item.id !== id));
  // };

  // const handleFilter = ({ target }) => {
  //   setFilter(target.value);
  // };

  // const getFilteredUsers = () => {
    // if (!filter) {
    //   return users;
    // }
    // const filterValue = filter.toLowerCase();
    // const filteredUsers = users.filter(({ name }) => {
    //   const nameValue = name.toLowerCase();
    //   return nameValue.includes(filterValue);
    // });

    // return filteredUsers;
  // };

  return (
    <div>
      <Section title={'Phonebook'}>
        {/* <Form onSubmit={addUser} /> */}
        <Form onSubmit={onAddUser} />
      </Section>
      <Section title={'Contancts'}>
        {/* <Users
          removeUser={removeUser}
          getFilteredUsers={getFilteredUsers()}
          handleFilter={handleFilter}
        /> */}
        <Users removeUser={onRemoveUser} getFilteredUsers={onFilteredUsers} handleFilter={onFilter} />
      </Section>
    </div>
  );
};

export default App;
