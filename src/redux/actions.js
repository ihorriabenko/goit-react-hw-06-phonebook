import { nanoid } from "nanoid";
import { ADD_USER, REMOVE_USER, FILTERED_USERS, FILTER } from "./types";

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload: {...payload, id: nanoid()},
   }
}

export const removeUser = (payload) => {
  return {
    type: REMOVE_USER,
    payload,
  }
}

export const filter = value => {
  return {
    type: FILTER,
    payload: value
  }
}

export const filteredUsers = () => {
  return {
    type: FILTERED_USERS,
  }
}

// const getFilteredUsers = () => {
//   if (!filter) {
//     return users;
//   }
//   const filterValue = filter.toLowerCase();
//   const filteredUsers = users.filter(({ name }) => {
//     const nameValue = name.toLowerCase();
//     return nameValue.includes(filterValue);
//   });

//   return filteredUsers;
// };

// const handleFilter = ({ target }) => {
//   setFilter(target.value);
// };
