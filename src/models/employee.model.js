var dbConn = require('./../../config/db.config');

var Employee = function (employee) {
    this.first_name = employee.first_name;
    this.emp_no = employee.emp_no;
    this.last_name = employee.last_name;
    this.gender = employee.gender;    
};

Employee.create = function (newEmp, result) {
    dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Employee.findById = function (emp_no, result) {
    dbConn.query("Select first_name, last_name, gender from employees where emp_no = ? ", emp_no, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Employee.findAll = function (result) {
    dbConn.query("xSelect first_name, last_name, gender  from employees limit 100", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

Employee.update = function (emp_no, employee, result) {
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,gender=? WHERE emp_no = ?", [employee.first_name, employee.last_name, employee.gender, emp_no], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Employee.delete = function (emp_no, result) {
    dbConn.query("DELETE FROM employees WHERE emp_no = ?", [emp_no], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Employee;