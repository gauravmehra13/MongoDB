const { findAllfromDb } = require("../database/connection")
const { insertToDb } = require("../database/connection")
const { insertManyToDb } = require("../database/connection")
const { updateManyToDb } = require("../database/connection");
const { DeleteDb } = require("../database/connection");


//read ops
const getEmployeeData = async function (req, res) {
    const query = req.query
    console.log("query=>", query)
    try {
        const employee = await findAllfromDb(query)
        return res.status(200).send({ EmployeeData: employee })
    }
    catch (error) {
        console.log("error occured in fetching the data", error)
        return res.status(200).send({ message: "Something went wrong" })
    }
}


//insert operations
const saveEmployeeData = async function (req, res) {
    const EmployeeData = req.body;
    try {
        if (EmployeeData && EmployeeData.length > 0) {
            const insertManyResponse = await insertManyToDb(EmployeeData)
            return res.status(200).send({ success: insertManyResponse.acknowledged })
        }
        const insertOneResponse = await insertToDb(EmployeeData)
        return res.status(200).send({ success: insertOneResponse.acknowledged })
    }
    catch (error) {
        console.log(" error occured whie inserting data =>", error)
        res.status(500).send({ message: "something went wrong while inserting the data" });
    }

}


//update operation
const updateEmployeeData = async function (req, res) {

    const filter = req.body.filter;
    const update = req.body.update;
    const changeData = {
        $set: update
    };

    try {
        const employee = await updateManyToDb(filter, changeData)
        res.status(200).send({ "Success:": employee.acknowledged });
    }
    catch (error) {

        res.status(500).send({
            message: "something went wrong while inserting the data"
        });
    }
}

//delete operation
const deleteEmployeeData = async function (req, res) {
    const EmployeeDeleteName = req.body.firstName;
    const filter = {
        "firstName": EmployeeDeleteName
    }

    try {
        const deleteResponse = await DeleteDb(filter)
        return res.status(200).send({ success: deleteResponse.acknowledged })
    }

    catch (error) {
        console.log(" error occured whie inserting data =>", error)
        res.status(500).send({ message: "something went wrong while inserting the data" });
    }
}





module.exports = { saveEmployeeData, getEmployeeData, updateEmployeeData, deleteEmployeeData }