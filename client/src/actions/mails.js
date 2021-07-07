import { START_LOADING, END_LOADING, FETCH_MAILS, CREATE_MAIL } from '../actionTypes';
import * as api from '../api/index.js';

export const getMails = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchMails();

    dispatch({ type: FETCH_MAILS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createMail = (mail, sender) => async (dispatch) => {
  try {
    console.log(mail, sender)
    dispatch({ type: START_LOADING });
    const { data: { newMail } } = await api.createMail({ ...mail, sender });

    dispatch({ type: CREATE_MAIL, payload: newMail });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};