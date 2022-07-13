import { nanoid } from "nanoid";
import { ADD_USER, REMOVE_USER, FILTER_USER } from "./types";

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload: {...payload, id: nanoid()},
   }
}

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id
  }
}

export const filterUser = value => {
  return {
    type: FILTER_USER,
    payload: value
  }
}
