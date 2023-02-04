const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://eunjung77819@gmail.com:gp12341234@cluster.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const db = client.db("test");
  console.log("Connected to MongoDB");
});