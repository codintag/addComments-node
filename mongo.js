var MongoClient = require('mongodb').MongoClient;
var url2 = "mongodb://localhost:27017/mydb";

MongoClient.connect(url2,{useNewUrlParser: true}, function(err, db) {
  if (err) throw err;
  console.log("connexion établie!");
  //create a collection
  let dbo = db.db('mydb');
 /* for insert into collection
  let insertCollect = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  */
 //let myQuery = { address: /^O/ };
  dbo.collection('users').drop(function(err, delOK){
      if(err) throw err;
      if(delOK) console.log('Collection deleted');
    //  console.log(res.insertedCount) //for see the number of inserted doCuments
      db.close();
  });
  
});