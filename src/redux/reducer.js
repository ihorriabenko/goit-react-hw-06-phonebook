import { ADD_USER, REMOVE_USER, FILTERED_USERS, FILTER } from './types';
import { combineReducers } from 'redux';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [...state, payload];

    case REMOVE_USER:
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch(type) {
    case FILTER:
      return payload;

    default:
      return state;
  }

};

const usersReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: usersReducer,
});

export default rootReducer;

// const initialStore = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const reducer = (store = initialStore, {type, payload}) => {
//   switch(type) {
//     case ADD_USER:
//       return {...store, contacts: {
//         ...store.contacts,
//         items: [...store.contacts.items,payload],
//       }}
//       case REMOVE_USER:
//         return store.contacts.items.filter(el => el.id !== payload);

//       case FILTERED_USERS:
//         if (!store.contacts.filter) {
//           return store.contacts.items;
//         }
//         const filterValue = store.contacts.filter.toLowerCase();
//         const filteredUsers = store.contacts.items.filter(({ name }) => {
//           const nameValue = name.toLowerCase();
//           return nameValue.includes(filterValue);
//         });

//         return filteredUsers;

//       default:
//         return store;
//   }
// };

// export default reducer;
