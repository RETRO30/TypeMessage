import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
import logger from './logger'

const app = new Koa()
const PORT = Number(process.env.PORT)

// Указываем папку с фронтендом
app.use(serve(path.join(__dirname, 'public'), {
    index: 'index.html',
    hidden: false, 
}))

async function onStartUp() {
    logger.info(`Server(frontend) startup on port: ${PORT}`)
}

app.listen(PORT, onStartUp)
