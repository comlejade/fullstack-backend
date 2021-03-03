import send from '../config/MailConfig'
import dayjs from 'dayjs'

class LoginController {
  constructor() { }
  async forget (ctx) {
    const { body } = ctx.request
    try {
      let result = await send({
        code: '1234',
        expire: dayjs().add(30, 'minute').format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Jade'
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功'
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default new LoginController()