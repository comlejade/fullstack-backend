import combineRouters from 'koa-combine-routers'
import demoRouter from './publicRouter'

export default combineRouters(
  demoRouter
)