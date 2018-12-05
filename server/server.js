const Koa = require('koa')
const app = new Koa()

const router = require('koa-router')()

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

router.get('/registUser', async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = {
    message: "success"
  }
})

app.use(router.routes())

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3031

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})