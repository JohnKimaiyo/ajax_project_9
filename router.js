const { router } = require('express');
const express = require('express');
const router = express.Router();

// employee data
let employee = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail.com',
        gender: 'male',
        ip_address: '1272.0.0.1'
    },

    {
        id: '_b',
        first_name: 'janet',
        last_name: 'wilson',
        email: 'janet@gmail.com',
        gender: 'female',
        ip_address: '1272.0.0.1'
    },
]

// get id
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// GET EMPLOYEES
router.get('/employees', (request, response) => {
    response.json(employees);
});

// post request
router.post('/e,ployee', (request, response) => {
    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        ip_address: request.body.ip_address,
    }
    employee.push(employee);
    console.log(`post request received at server ..${new Date().toplacate()}`);
    response.json(employee);
});

// put request
router.put('/employee/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.gender,
        ip_address: request.body.ip_address
    };
    let existingEmployee = employee.find((employee) => {
        return employee.id == empID;
    });
    employees.splice(employee.indexOf(exitingEmployee), 1, updateEmployee);
    console.log(`put received at server ..${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'put request is success' })
});

// delete request
router.delete('/employees/:id', (request, response) => {
    let empId = request.params.id;
    employees = employee.filter((employee) => {
        return employee.id !== empId;
    });
    console.log(`delete request receivedat server ..${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'delete request is success' });
});

module.exports = router;