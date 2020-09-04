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
  if (!req.body) {
    res.status(200).send('Ok');
    return;
  }
  console.log(req.body);
  const db = await connectToDB();
  const texts = await db.collection('texts');
  await texts.insertOne({ 'data': req.body.data });
  res.status(200).send('Ok');
}