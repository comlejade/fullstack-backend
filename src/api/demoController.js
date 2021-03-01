class DemoController {
  constructor() { }
  async demo (ctx) {
    ctx.body = {
      message: 'this is a demo controller'
    }
  }
}

export default new DemoController()