import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionControllers from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControllers.store);

export default routes;
