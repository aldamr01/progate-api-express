const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

router.get('/', employeeController.findAll);

router.post('/', employeeController.create);

router.get('/:emp_no', employeeController.findById);

router.put('/:emp_no', employeeController.update);

router.delete('/:emp_no', employeeController.delete);

module.exports = router;