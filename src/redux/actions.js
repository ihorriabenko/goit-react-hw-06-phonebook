// import { ADD_USER, REMOVE_USER, FILTER_USER } from './types';
import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addUser = createAction('user/add', user => ({
  payload: {
    ...user,
    id: nanoid(),
  },
}));

// export const addUser = (payload) => {
//   return {
//     type: ADD_USER,
//     payload: {...payload, id: nanoid()},
//    }
// }

export const removeUser = createAction('user/remove');

// export const removeUser = (id) => {
//   return {
//     type: REMOVE_USER,
//     payload: id
//   }
// }

export const filterUser = createAction('user/filter');

// export const filterUser = value => {
//   return {
//     type: FILTER_USER,
//     payload: value
//   }
// }
