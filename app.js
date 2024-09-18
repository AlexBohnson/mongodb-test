const { MongoClient } = require('mongodb');
const uri = require('./atlas.uri.js');

console.log(uri);

const client = new MongoClient(uri);
const dbname = "bank";

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the database ${dbname}`);
    } catch (e) {
        console.error(e);
    }
}

const main = async () => {
    try {
        await connectToDatabase();
        const databaseList = await client.db().admin().listDatabases();
        databaseList.databases.forEach(db => console.log(` - ${db.name}`));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

main();