import { Context, Next } from "koa";
import logger from "../logger";


export default async function loggerMiddleware(ctx: Context, next: Next) {
    await next()

    logger.info(`${ctx.method} ${ctx.url} ${ctx.response.status}`)
}