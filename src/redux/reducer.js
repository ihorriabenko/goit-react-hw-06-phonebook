// import { ADD_USER, REMOVE_USER, FILTER_USER } from './types';
import { addUser, removeUser, filterUser } from './actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const itemsReducer = createReducer([], {
  [addUser]: (state, { payload }) => [...state, payload],
  [removeUser]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_USER:
//       return [...state, payload];

//     case REMOVE_USER:
//       return state.filter(({id}) => id !== payload);

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer('', {
  [filterUser]: (_, { payload }) => payload,
});

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER_USER:
//       return payload;

//     default:
//       return state;
//   }
// };

const usersReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const rootReducer = combineReducers({
//   contacts: usersReducer,
// });

export default usersReducer;

// export default rootReducer;
