const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");


router.post('/employees', employeeController.saveEmployeeData)
router.get('/employees', employeeController.showEmployeeData)
router.put('/employees', employeeController.updateEmployeeData)
router.delete('/employees', employeeController.deleteEmployeeData)


module.exports = router;
