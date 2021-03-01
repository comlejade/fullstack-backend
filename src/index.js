import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import serve from 'koa-static'
import cors from '@koa/cors'
import jsonutil from 'koa-json'
import router from './routes/routes'
import koaBody from 'koa-body'
import compose from 'koa-compose'
import compress from 'koa-compress'

const app = new Koa()

const isDevMode = process.env.NODE_ENV === 'production' ? false : true

const middleware = compose([
  koaBody(),
  serve(path.join(__dirname, '../public')),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet(),
  cors()
])

if (!isDevMode) {
  app.use(compress())
}

app.use(middleware);
app.use(router())

app.listen(3000)
