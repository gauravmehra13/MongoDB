const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

//find ops
const findAllfromDb = async (query) => {
    try {
        await client.connect();
        console.log("connection to db is successful");
        const database = client.db("Human_Resource");
        const collection = database.collection("employee");
        const dbResponse = await collection.find(query)
        console.log("db ops res=>", dbResponse)
        await client.close()
        return dbResponse;
    }
    catch (error) {
        return error.message
    }
}

//insert ops
const insertToDb = async (data) => {
    try {
        await client.connect();
        console.log("connection to db is successful");
        const database = client.db("Human_Resource");
        const collection = database.collection("employee");
        const dbResponse = await collection.insertOne(data);
        //   console.log("db ops res=>", dbResponse);
        await client.close();
        return dbResponse;

    }
    catch (error) {
        return error.message;
    }
}

const insertManyToDb = async (data) => {
    try {
        await client.connect();
        console.log("connection to db is successful");
        const database = client.db("Human_Resource");
        const collection = database.collection("employee");
        const dbResponse = await collection.insertMany(data);
        //   console.log("db ops res=>", dbResponse);
        await client.close();
        return dbResponse;

    }
    catch (error) {
        return error.message;
    }
}

//update ops
const updateManyToDb = async (filter, changeData) => {
    try {
        await client.connect();
        console.log("connection to db is successful")
        const database = client.db("Human_Resource");
        const collection = database.collection("employee");
        const dbResponse = await collection.updateMany(filter, changeData);
        console.log("db ops res=>", dbResponse);
        await client.close();
        return dbResponse;

    }
    catch (error) {
        return error.message;
    }
}

//delete ops
const DeleteDb = async (filter) => {
    try {
        await client.connect();
        console.log("connection to db is successful")
        const database = client.db("Human_Resource");
        const collection = database.collection("employee");
        const dbResponse = await collection.deleteMany(filter);
        console.log("db ops res=>", dbResponse);
        await client.close();
        return dbResponse;

    }
    catch (error) {
        return error.message;
    }
}




module.exports = { findAllfromDb, insertToDb, insertManyToDb, updateManyToDb,DeleteDb };