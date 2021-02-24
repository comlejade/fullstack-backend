// const Koa = require('koa')
// const cors = require('@koa/cors')
// const json = require('koa-json')
// const helmet = require('koa-helmet')
// const serve = require('koa-static')
// const path = require('path')
// const router = require('./routes/routes')
import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import serve from 'koa-static'
import cors from '@koa/cors'
import json from 'koa-json'
import router from './routes/routes'

const app = new Koa()

app.use(cors())
// app.use(router.routes())  // 将所有的router定义的请求添加到app
//   .use(router.allowedMethods()) // 用于拦截应用的请求，处理错误请求，返回4xx,5xx等的错误
app.use(helmet())
app.use(serve(path.join(__dirname, '../public')))
app.use(json({ pretty: false, param: 'pretty' }))
app.use(router())

app.listen(3000)
