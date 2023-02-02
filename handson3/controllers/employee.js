const { Employee } = require("../models/employee")

//add data
const saveEmployeeData = async function (req, res) {
    const employeeData = req.body
    try {
        const employeeObj = new Student({
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            salary: employeeData.salary,
            department: employeeData.department,
            lastCompany: employeeData.lastCompany,
            lastSalary: employeeData.lastSalary,
            overallExp: employeeData.overallExp,
            contactInfo: employeeData.contactInfo,
            yearGrad: employeeData.yearGrad,
            gradStream: employeeData.gradStream
        })

        const validateResult = await employeeObj.validate()
        console.log(validateResult)
        const insertOneResponse = await employeeObj.save()
        console.log("insertOneResponse", insertOneResponse)
        return res.status(200).send({ success: insertOneResponse })

    }
    catch (error) {
        console.log("error in saving the data:", error)
        return res.status(500).send({ message: "something went wrong while inserting data" })
    }
}


//read data
const showEmployeeData = async function (req, res) {
    const employeeFirstName = req.query.firstName
    try {
        const queryResponse = await Employee.find({ firstName: employeeFirstName })
        console.log("queryResponse", queryResponse)
        return res.status(200).send(queryResponse)
    }
    catch (error) {
        console.log("error in saving the data:", error)
        return res.status(500).send({ message: "something went wrong while retrieving data" })
    }
}

//update data
const updateEmployeeData = async function (req, res) {

    const filter = req.body.filter;
    const update = req.body.update;

    const employeeUpdate = {
        $set: update
    }
    try {
        const updateResponse = await Employee.updateMany(filter, employeeUpdate)
        console.log("updateResponse", updateResponse)
        return res.status(200).send({ updateDetails: updateResponse })
    }
    catch (error) {
        console.log("error in saving the data:", error)
        return res.status(500).send({ message: "something went wrong while updating the data" })
    }
}

//delete
const deleteEmployeeData = async function (req, res) {
    const employeeDeleteName = req.body.firstName;
    const filter = {
        "firstName": employeeDeleteName
    }

    try {
        const deleteResponse = await Employee.deleteMany(filter)
        console.log("deleteResponse", deleteResponse)
        return res.status(200).send(deleteResponse)
    }

    catch (error) {
        console.log(" error occured whie deleting data =>", error)
        res.status(500).send({ message: "something went wrong while deleting the data" });
    }
}



module.exports = { saveEmployeeData, showEmployeeData, updateEmployeeData, deleteEmployeeData }