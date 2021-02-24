// const combineRouters = require('koa-combine-routers')
// const aRouter = require('./aRouter')
// const bRouter = require('./bRouter')
import combineRouters from 'koa-combine-routers'
import aRouter from './aRouter'
import bRouter from './bRouter'

// module.exports = combineRouters(
//   aRouter,
//   bRouter
// )

export default combineRouters(
  aRouter,
  bRouter
)