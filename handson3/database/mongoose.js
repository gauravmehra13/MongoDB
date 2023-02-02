const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017";

const connection = async () => {
    try {
        const client = await mongoose.connect(url)
        console.log("connection to the database is successful using mongoose")
        return client
    }
    catch (error) {
        console.log("error occured while connecting to mongoose")
    }
}

module.exports = connection