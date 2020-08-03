import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {User} from 'api-interfaces';

import * as userApi from 'test-task/api/user';
import {RootState} from 'test-task/store/modules';

const CREATE_USER_START = 'app/modules/user/CREATE_USER_START';
const CREATE_USER_SUCCESS = 'app/modules/user/CREATE_USER_SUCCESS';
const CREATE_USER_FAIL = 'app/modules/user/CREATE_USER_FAIL';

const UPDATE_USER_START = 'app/modules/user/UPDATE_USER_START';
const UPDATE_USER_SUCCESS = 'app/modules/user/UPDATE_USER_SUCCESS';
const UPDATE_USER_FAIL = 'app/modules/user/UPDATE_USER_FAIL';

const GET_USER_START = 'app/modules/user/GET_USER_START';
const GET_USER_SUCCESS = 'app/modules/user/GET_USER_SUCCESS';
const GET_USER_FAIL = 'app/modules/user/GET_USER_FAIL';

type Thunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

type CreateActionTypes =
    | typeof CREATE_USER_START
    | typeof CREATE_USER_SUCCESS
    | typeof CREATE_USER_FAIL;

type UpdateActionTypes =
    | typeof UPDATE_USER_START
    | typeof UPDATE_USER_SUCCESS
    | typeof UPDATE_USER_FAIL;

type GetActionTypes =
    | typeof GET_USER_START
    | typeof GET_USER_SUCCESS
    | typeof GET_USER_FAIL;

type UserAction<Type> = {
    type: Type;
    payload: {data: User};
};

type UserActions =
    | UserAction<CreateActionTypes>
    | UserAction<UpdateActionTypes>
    | UserAction<GetActionTypes>;

export const createUser = (): Thunk => {
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

export const updateUser = (id: string, props: Partial<User>): Thunk => {
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

export const getUser = (id: string): Thunk => {
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

const initialState: User = JSON.parse(localStorage.getItem('user'));

export default function reducer(
    state: User = initialState,
    action: UserActions
): User {
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
