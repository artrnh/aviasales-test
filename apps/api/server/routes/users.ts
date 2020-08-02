import {Router} from 'express';

import * as usersController from '../controllers/users';

const router = Router();

router.route('/users').post(usersController.createUser);

router
    .route('/users/:id')
    .get(usersController.getUser)
    .patch(usersController.updateUser);

export {router};
