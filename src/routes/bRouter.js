// const Router = require('@koa/router')
// const b = require('../api/b')
import Router from '@koa/router'
import b from '../api/b'

const router = new Router()

router.get('/b', b)

// module.exports = router
export default router