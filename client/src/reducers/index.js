import { combineReducers } from 'redux';

import mails from './mails';
import users from './users'

export const reducers = combineReducers({ mails, users });