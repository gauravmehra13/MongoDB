const express = require("express");
const bodyParser = require("body-parser")
const employeeRouter = require("./routes/mongEmployee")
const connection = require("./database/mongoose")

const app = express();


app.use(bodyParser.json())
app.use(employeeRouter)



app.listen(5080, async function () {
    console.log(`the server is running at port 5080`)
    console.log("running the database connection")
    await connection()
});