
const MongoClient = require('mongodb').MongoClient;
const MongodbUrl = "mongodb://localhost:27017/DB_NEWS";

MongoClient.connect(MongodbUrl, function (err, db) { 
  if(err) throw err;
  console.log("数据库已创建!")
  let dbase = db.db("DB_NEWS")
  dbase.createCollection('user', function (err, res) { 
    if (err) throw err;
    console.log("创建集合")
    db.close()
   })
 })

 MongoClient.connect(MongodbUrl, function (err, db) { 
   let dbase = db.db("DB_NEWS");
   let item = {
     name: "admin",
     newsList: [
       {
         title: "XXXXXXXXXXXXXXX",
         desc: "SSSSSSSSSSSSSSSSSSSSSS",
         passage: "sssssssssssssssssssssssssssssflskjfgh"
       }
     ]
   }
   dbase.collection("user").insertOne(item, function(err, res) {
     if (err) throw err;
     console.log("数据插入成功")
     db.close()
   })
  })