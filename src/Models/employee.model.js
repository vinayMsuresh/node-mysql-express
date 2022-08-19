const db = require('../../confg/db_config');

var Employee = function( employee ){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.salary = employee.salary;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

Employee.getEmployeeList = (results) => {
    db.query('SELECT * FROM employees WHERE is_deleted = 0', (err, res) =>{
        if(err){
            console.log('Error in fetching data', err);
            results(err, null);
            throw err;
        }
        else {
            console.log('Data fetching successfull');
            results(null, res);
        }
    })
}

Employee.getEmployeeById = (id, results) => {
    db.query('SELECT * FROM employees WHERE id = ?', id, (err, res) => {
        if(err){
            console.log('error in fetching employee by ID', err);
            results(err, null);
            throw err;
        }
        else {
            results(null, res);
        }
    })
}

Employee.createEmployee = (employeeData, results) => {
    db.query('INSERT INTO employees SET ?', employeeData, (err, res) => {
        if(err) {
            results(err, null);
        }
        else {
            results(null, res);
        }
    })
}

Employee.updateEmployee = (empData, id, results) => {
    db.query(`UPDATE employees SET first_name = ?, last_name = ?, email = ?,
     phone = ?, salary = ?, organization = ?, designation = ?, status = ?, updated_at = ?  WHERE id = ?`, 
     [empData.first_name, empData.last_name, empData.email, empData.phone, empData.salary, empData.organization,
        empData.designation, empData.status, empData.updated_at, id], (err, res) => {
        if(err){
            results(err, null);
        } 
        else {
            results(null, res);
        }
        
    })
}

Employee.deleteEmployee = (id, results) => {
    // db.query('DELETE FROM employees WHERE id = ?', id, (err, res) => {
    //     if(err) {
    //         results(err, null);
    //     }

    //     else {
    //         results(null, res);
    //     }
    // })

    db.query('UPDATE employees SET isDeleted = ? WHERE id = ?',[1, id], (err, res) => {
        if(err){
            results(err, null);
        } 
        else {
            results(null, res);
        }
    })
}
module.exports = Employee;