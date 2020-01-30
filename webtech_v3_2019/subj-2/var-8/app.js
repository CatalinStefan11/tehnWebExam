const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.students = [
    {
        name: "Gigel",
        surname: "Popel",
        age: 23
    },
    {
        name: "Gigescu",
        surname: "Ionel",
        age: 25
    }
];

app.get('/students', (req, res) => {
    res.status(200).json(app.locals.products);
});

app.post('/students', (req, res, next) => {
    try{

        if(Object.keys(req.body).length === 0 && req.body.constructor === Object){
            res.status(500).json({message: "Body is missing"})
        }
        if(req.body.name && req.body.surname && req.body.age){
            if(req.body.age < 0){
                res.status(500).json({message: "Age should be a positive number"})
            }else {
                for(let i = 0; i < app.locals.students.length; i++){
                    if(app.locals.students[i].name == req.body.name){
                        res.status(500).json({message: "Student already exists"})
                    }
                }
                app.locals.students.push(req.body);
                res.status(201).json({message: "Created"})
            }


        }else {
            res.status(500).json({message: "Invalid body format"})
        }

    }catch(err){
        console.warn(err.stack)
    }
})

module.exports = app;