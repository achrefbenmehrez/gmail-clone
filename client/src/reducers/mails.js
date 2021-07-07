import { FETCH_MAILS, CREATE_MAIL, START_LOADING, END_LOADING, OPEN_SEND_MAIL, CLOSE_SEND_MAIL, SELECTED_MAIL } from '../actionTypes';

export default (state = { isLoading: true, sendMailOpen: false, selectedMail: {}, mails: [] }, action) => {
  switch (action.type) {
    case FETCH_MAILS:
      return { ...state, mails: action.payload };
    case CREATE_MAIL:
      return { ...state, mails: [...state.mails, action.payload] };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case OPEN_SEND_MAIL:
      return { ...state, sendMailOpen: true };
    case CLOSE_SEND_MAIL:
      return { ...state, sendMailOpen: false };
    case SELECTED_MAIL:
      return { ...state, selectedMail: action.payload }
    default:
      return state;
  }
};