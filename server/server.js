const Koa = require('koa')
const app = new Koa()

const router = require('koa-router')()

const MongoClient = require('mongodb').MongoClient;
const MongodbUrl = "mongodb://localhost:27017/DB_NEWS";

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

router.get('/registUser', async (ctx, next) => {
  ctx.response.status = 200

  MongoClient.connect(MongodbUrl, function (err, db) {
		let dbase = db.db("DB_NEWS");
		dbase.collection("user").insertOne(ctx.request.query, function(err, res) {
			if (err) throw err;
			console.log("数据插入成功")
			ctx.response.body = {
				message: "数据插入成功！！"
			}
			db.close()
		})
	 })

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