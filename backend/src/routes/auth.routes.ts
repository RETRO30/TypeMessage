import Router from 'koa-router';
import { Context } from 'koa';
import { login, register } from '../controllers/auth.controller';

const authRouter = new Router();

authRouter.post('/register', register)

authRouter.post('/login', login)

export { authRouter }