import axios from 'axios';
import * as types from './action-types';

export function updateSetUser(data) {
  return {
    type: types.SET_USER,
    data,
  };
}

export function updateUserId(data) {
  return {
    type: types.SET_USER_ID,
    data,
  };
}

export function fetchApiCall() {
  return async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    dispatch(updateUserId(response.data.userId));
  }
}