const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//* banco local
const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/';

let db = null;

const connection = () => (
    db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('TasksManager');
    return db;
    })
);

module.exports = connection;