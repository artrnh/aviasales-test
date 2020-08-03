import * as express from 'express';

import {User} from '../models';

export const createUser = (
    req: express.Request,
    res: express.Response,
    next
) => {
    return User.create()
        .then(([user]) => res.json(user))
        .catch(next);
};

export const getUser = (req: express.Request, res: express.Response, next) => {
    const {id} = req.params;

    return User.find(id)
        .then((user) => res.json(user))
        .catch(next);
};

export const updateUser = (
    req: express.Request,
    res: express.Response,
    next
) => {
    const {id} = req.params;
    const {props} = req.body;

    return User.update(id, props)
        .then(([user]) => res.json(user))
        .catch(next);
};
