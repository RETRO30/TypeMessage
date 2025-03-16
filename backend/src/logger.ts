import winston from 'winston';

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format((info) => {
            info.level = info.level.toUpperCase();
            return info;
        })(),
        winston.format.colorize(),
        winston.format.timestamp({format: 'DD.MM.YYYY HH:mm:ss.SSSS'}),
        winston.format.printf(({timestamp, level, message }) => {
            return `${timestamp} | ${level} | ${message}`
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs/app.log" })
    ]
});

export default logger;