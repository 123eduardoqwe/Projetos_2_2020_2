const MongoClient = require('mongodb').MongoClient;

let cachedDB = null;

const connectToDB = async () => {
    if (cachedDB) return cachedDB;
    const client = await MongoClient.connect('<DB_URI>', { useNewUrlParser: true });
    const db = await client.db('mula');
    cachedDB = db;
    return db;
};

module.exports = async (req, res) => {
    const db = await connectToDB();
    const trips = await db.collection('trips');
    const ret = trips.find({});
    const arr = await ret.toArray();
    res.status(200).json(arr);
}