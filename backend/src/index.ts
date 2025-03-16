import logger from './logger';

const message: string = "Hello world";

logger.info(`${message} with logger`)

logger.warn('Warn Logs with logger')

logger.error('Error logs with logger')