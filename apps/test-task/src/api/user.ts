import axios, {AxiosResponse} from 'axios';

import {User} from 'api-interfaces';

const instance = axios.create({baseURL: '/api'});

export const getUser = (id: string): Promise<AxiosResponse<User>> =>
    instance.get(`/users/${id}`);

export const updateUser = (
    id: string,
    props: Partial<User>
): Promise<AxiosResponse<User>> => instance.patch(`/users/${id}`, {props});

export const createUser = (): Promise<AxiosResponse<User>> =>
    instance.post('/users');
