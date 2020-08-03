import * as userApi from 'test-task/api/user';

import {User} from 'api-interfaces';

const CREATE_USER_START = 'app/modules/user/CREATE_USER_START';
const CREATE_USER_SUCCESS = 'app/modules/user/CREATE_USER_SUCCESS';
const CREATE_USER_FAIL = 'app/modules/user/CREATE_USER_FAIL';

const UPDATE_USER_START = 'app/modules/user/UPDATE_USER_START';
const UPDATE_USER_SUCCESS = 'app/modules/user/UPDATE_USER_SUCCESS';
const UPDATE_USER_FAIL = 'app/modules/user/UPDATE_USER_FAIL';

const GET_USER_START = 'app/modules/user/GET_USER_START';
const GET_USER_SUCCESS = 'app/modules/user/GET_USER_SUCCESS';
const GET_USER_FAIL = 'app/modules/user/GET_USER_FAIL';

export const createUser = () => {
    return async (dispatch) => {
        dispatch({type: CREATE_USER_START});

        try {
            const {data} = await userApi.createUser();

            localStorage.setItem('user', JSON.stringify(data));
            dispatch({type: CREATE_USER_SUCCESS, payload: {data}});
        } catch (error) {
            dispatch({type: CREATE_USER_FAIL});
        }
    };
};

export const updateUser = (id: string, props: Partial<User>) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_USER_START});

        try {
            const {data} = await userApi.updateUser(id, props);

            localStorage.setItem('user', JSON.stringify(data));
            dispatch({type: UPDATE_USER_SUCCESS, payload: {data}});
        } catch (error) {
            dispatch({type: UPDATE_USER_FAIL});
        }
    };
};

export const getUser = (id: string) => {
    return async (dispatch) => {
        dispatch({type: GET_USER_START});

        try {
            const {data} = await userApi.getUser(id);

            localStorage.setItem('user', JSON.stringify(data));
            dispatch({type: GET_USER_SUCCESS, payload: {data}});
        } catch (error) {
            dispatch({type: GET_USER_FAIL});
        }
    };
};

const initialState = JSON.parse(localStorage.getItem('user'));

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
        case UPDATE_USER_SUCCESS:
        case GET_USER_SUCCESS: {
            const {
                payload: {data},
            } = action;

            return {...data};
        }

        default:
            return state;
    }
}
