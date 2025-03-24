import Router from 'koa-router';
import { authRouter } from "./auth.routes";

const mainRouter = new Router();

mainRouter.use('/auth', authRouter.routes());


export { mainRouter };