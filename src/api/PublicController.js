import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor() { }
  async getCaptcha (ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0oO1i',
      noise: Math.floor(Math.random * 5),
      color: true,
      width: 150,
      height: 50
    })
    ctx.body = {
      code: 200,
      data: newCaptcha.data
    }
  }
}

export default new PublicController()