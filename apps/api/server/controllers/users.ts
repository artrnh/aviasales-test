import {User} from '../models';

export const createUser = (req, res, next) => {
    return User.create()
        .then((user) => res.json(user))
        .catch(next);
};

export const getUser = (req, res, next) => {
    const {id} = req.params;

    return User.find(id)
        .then((user) => res.json(user))
        .catch(next);
};

export const updateUser = (req, res, next) => {
    const {id} = req.params;
    const {props} = req.body;

    return User.update(id, props)
        .then((user) => res.json(user))
        .catch(next);
};
