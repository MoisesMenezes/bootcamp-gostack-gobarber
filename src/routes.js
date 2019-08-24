import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionControllers from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControllers.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
