import { ADD_USER, REMOVE_USER, FILTER_USER } from './types';
import { combineReducers } from 'redux';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [...state, payload];

    case REMOVE_USER:
      return state.filter(({id}) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch(type) {
    case FILTER_USER:
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
