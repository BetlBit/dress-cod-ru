const connectDB = function() {
    const MongoClient = require("mongodb").MongoClient;
    const userName = process.env.DBNAME || "lemon";
    const pwd = process.env.DBPASS || "1337";
    const uri = `mongodb+srv://${userName}:${pwd}@cluster0.qz67y.mongodb.net/dresscod?retryWrites=true&w=majority`;
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
}
console.log('pass')
module.exports = connectDB;