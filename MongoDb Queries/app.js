// Open CMD and run mongosh  (mongosh -> MongoDB Shell)

///////////////////////////////////////////////
// Creating & Deleting => Database & Collection
///////////////////////////////////////////////

// use amazon
// db
// show dbs
//  -> admin   40.00 KiB
//     config  84.00 KiB
//     local   40.00 KiB
// db.products.insert({name: "macbook"})
//  ->{
//     acknowledged: true,
//     insertedIds: { '0': ObjectId("655723f93922a889a9bb2765") }
//   }
// show dbs
// ->  admin   40.00 KiB
//     amazon  40.00 KiB
//     config  72.00 KiB
//     local   40.00 KiB

// show collections
// -> products
// -> users
// db.users.drop()
// -> true
// show collections
// -> products
// db.dropDatabase()
// ->{ ok: 1, dropped: 'amazon' }
// show collections
// admin   40.00 KiB
// config  96.00 KiB
// local   40.00 KiB


///////////////////////////////////////////////
//CRUD => Creating Documents
///////////////////////////////////////////////
// test> use amazon
// switched to db amazon
// amazon> db.products.insertOne({name: "macbook", price:1500, category: "Computers"})
// {
//   acknowledged: true,
//   insertedId: ObjectId("6557351ca2e17dba19106d96")
// }
// amazon> db.products.find()
// [
//   {
//     _id: ObjectId("6557351ca2e17dba19106d96"),
//     name: 'macbook',
//     price: 1500,
//     category: 'Computers'
//   }
// ]
// amazon> db.products.insertMany([{name: "iPhone 11", price: 900, category: "Electronics"},{name: "Headphone", price: 100, category:"Electronics"}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("655735a7a2e17dba19106d97"),
//     '1': ObjectId("655735a7a2e17dba19106d98")
//   }
// }
// amazon> db.products.find()
// [
//   {
//     _id: ObjectId("6557351ca2e17dba19106d96"),
//     name: 'macbook',
//     price: 1500,
//     category: 'Computers'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d97"),
//     name: 'iPhone 11',
//     price: 900,
//     category: 'Electronics'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d98"),
//     name: 'Headphone',
//     price: 100,
//     category: 'Electronics'
//   }
// ]

///////////////////////////////////////////////
//CRUD => Reading Documents
///////////////////////////////////////////////
// test> use amazon
// switched to db amazon
// amazon> db.products.find()
// [
//   {
//     _id: ObjectId("6557351ca2e17dba19106d96"),
//     name: 'macbook',
//     price: 1500,
//     category: 'Computers'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d97"),
//     name: 'iPhone 11',
//     price: 900,
//     category: 'Electronics'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d98"),
//     name: 'Headphone',
//     price: 100,
//     category: 'Electronics'
//   }
// ]
// amazon> db.products.find().pretty()
// [
//   {
//     _id: ObjectId("6557351ca2e17dba19106d96"),
//     name: 'macbook',
//     price: 1500,
//     category: 'Computers'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d97"),
//     name: 'iPhone 11',
//     price: 900,
//     category: 'Electronics'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d98"),
//     name: 'Headphone',
//     price: 100,
//     category: 'Electronics'
//   }
// ]
// amazon> db.products.find({name:"macbook"})
// [
//   {
//     _id: ObjectId("6557351ca2e17dba19106d96"),
//     name: 'macbook',
//     price: 1500,
//     category: 'Computers'
//   }
// ]
// amazon> db.products.find({category:"Electronics"})
// [
//   {
//     _id: ObjectId("655735a7a2e17dba19106d97"),
//     name: 'iPhone 11',
//     price: 900,
//     category: 'Electronics'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d98"),
//     name: 'Headphone',
//     price: 100,
//     category: 'Electronics'
//   }
// ]
// amazon> db.products.find({}, {name:1})
// [
//   { _id: ObjectId("6557351ca2e17dba19106d96"), name: 'macbook' },
//   { _id: ObjectId("655735a7a2e17dba19106d97"), name: 'iPhone 11' },
//   { _id: ObjectId("655735a7a2e17dba19106d98"), name: 'Headphone' }
// ]
// amazon> db.products.find({}, {name:1, _id:0})
// [ { name: 'macbook' }, { name: 'iPhone 11' }, { name: 'Headphone' } ]
// amazon> db.products.find({}, {name:1, _id:0}).limit(2)
// [ { name: 'macbook' }, { name: 'iPhone 11' } ]
// amazon> db.products.find({price: {$lt: 150}})
// [
//   {
//     _id: ObjectId("655735a7a2e17dba19106d98"),
//     name: 'Headphone',
//     price: 100,
//     category: 'Electronics'
//   }
// ]
// amazon> db.products.find({price: {$lte: 150}})
// [
//   {
//     _id: ObjectId("655735a7a2e17dba19106d98"),
//     name: 'Headphone',
//     price: 100,
//     category: 'Electronics'
//   }
// ]
// amazon> db.products.find({price: {$gt: 800}})
// [
//   {
//     _id: ObjectId("6557351ca2e17dba19106d96"),
//     name: 'macbook',
//     price: 1500,
//     category: 'Computers'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d97"),
//     name: 'iPhone 11',
//     price: 900,
//     category: 'Electronics'
//   }
// ]
// amazon> db.products.find({price: {$gte: 900}})
// [
//   {
//     _id: ObjectId("6557351ca2e17dba19106d96"),
//     name: 'macbook',
//     price: 1500,
//     category: 'Computers'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d97"),
//     name: 'iPhone 11',
//     price: 900,
//     category: 'Electronics'
//   }
// ]
// amazon> db.products.find({$and: [{price: {$lt:200}},{category:"Electronics"}]})
// [
//   {
//     _id: ObjectId("655735a7a2e17dba19106d98"),
//     name: 'Headphone',
//     price: 100,
//     category: 'Electronics'
//   }
// ]
// amazon> db.products.find({$or: [{price: {$gt:500}},{category:"Electronics"}]})
// [
//   {
//     _id: ObjectId("6557351ca2e17dba19106d96"),
//     name: 'macbook',
//     price: 1500,
//     category: 'Computers'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d97"),
//     name: 'iPhone 11',
//     price: 900,
//     category: 'Electronics'
//   },
//   {
//     _id: ObjectId("655735a7a2e17dba19106d98"),
//     name: 'Headphone',
//     price: 100,
//     category: 'Electronics'
//   }
// ]

///////////////////////////////////////////////
//CRUD => Updating Documents
///////////////////////////////////////////////

///////////////////////////////////////////////
//CRUD => Deleting Documents
///////////////////////////////////////////////