import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { mainRouter } from './routes/index'
import logger from './logger'
import loggerMiddleware from './middlewares/logger.middlewares';

const app = new Koa();
const router = new Router();
const PORT = Number(process.env.PORT)

app.use(bodyParser());
app.use(loggerMiddleware)
app.use(mainRouter.routes()).use(router.allowedMethods());

async function onStartUp() {
    logger.info(`Server(backend) startup on port: ${PORT}`)
}

app.listen(PORT, onStartUp)
