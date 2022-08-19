const EmployeeModel = require('../Models/employee.model');

exports.getEmployeeList = (req, res) => {

    EmployeeModel.getEmployeeList((err, employee) => {
        if(err) res.send(err);
        res.send(employee);
    })
}

exports.getEmployeeById = (req, res) => {
    // console.log('Fetching data by id');
    EmployeeModel.getEmployeeById(req.params.id, (err, employee) => {
        if(err) res.send(err);
        res.send(employee);
    })
}

exports.createEmployee = (req, res) => {
    const Employee = new EmployeeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({err: 'Please enter all the details'});
    }
    
    else {
        EmployeeModel.createEmployee(Employee, (err, employee) => {
            if(err) res.send(err);
            res.send({message: 'Inserted successfully'});
        })
    }   
}

exports.updateEmployee = (req, res) => {
    const Employee = new EmployeeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({err: 'Please enter all the details'});
    }
    
    else {
        EmployeeModel.updateEmployee(Employee, req.params.id, (err, employee) => {
            if(err) res.send(err);
            res.send({message: 'Updated successfully'});
        })
    }  
}

exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
        if(err) res.send(err);
        res.send({message:'Employee deleted successfully', data: employee});
    })
}