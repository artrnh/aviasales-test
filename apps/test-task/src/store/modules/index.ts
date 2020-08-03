import {combineReducers} from 'redux';

import {User} from 'api-interfaces';

import userReducer from './user';

export interface RootState {
    user: User;
}

export default combineReducers<RootState>({user: userReducer});
