import Router from '@koa/router'
import demoContoller from '../api/demoController'

const router = new Router()

router.get('/demo', demoContoller.demo)

export default router
