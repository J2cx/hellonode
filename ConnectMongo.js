var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('foo', server);

//db.open(function(err, db) {
//  if(!err) {
//    console.log("We are connected");
//  }
//});

// insert
//db.open(function(err, db) {
//  if(!err) {
//    db.collection('bar', function(err, collection) {
//      var doc1 = {a: 1};
//      var doc2 = {a: 2, b: 'b2'};
//      var docs = [{a:3}, {a:4}];//

//      collection.insert(doc1);
//      collection.insert(doc2, {safe:true}, function(err, result) {});
//      collection.insert(docs, {safe:true}, function(err, result) {});
//      console.log("Inserted");
//    });
//  }
//});

// get
db.open(function(err, db) {
    if(!err) {
        console.log("We are connected");
        db.collection('bar', function(err, collection){
            collection.find().toArray(function(error, bars){console.log(bars);});
        collection.find({a:1}).toArray(function(error, bars){console.log(bars);});
        collection.findOne({a: 1}, function(error, bar){console.log(bar)});
        console.log("Get");
        });
    }
});

// others
//collection.update({a:996}, {$push: {b:'b'}}, function(error, bars){});
//collection.update({a:996}, {$set: {a:997}}, function(error, bars){});//

//collection.remove({a:997}, {safe:true}, function(error, count){
//    console.log(error); 
//    console.log(count);
//    collection.remove();
//});//

//collection.find({}, {sort: [['created_at', 'desc'], ['body', 'asc']]})//

//collection.find({}, {limit: 10, skip:20})//

//collection.count({}, function(err, count){...} )