const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");

router.post('/employee', employeeController.saveEmployeeData);
router.get('/employee', employeeController.getEmployeeData);
router.put('/employee', employeeController.updateEmployeeData);
router.delete('/employee', employeeController.deleteEmployeeData);

module.exports = router;
