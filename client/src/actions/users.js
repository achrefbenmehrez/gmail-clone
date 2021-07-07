import * as api from '../api';
import { LOGIN } from '../actionTypes'

export const signin = (userData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userData);
    
    dispatch({ type: LOGIN, data });
  } catch (error) {
    console.error(error);
  }
};
