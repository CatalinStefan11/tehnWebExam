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
    res.status(200).json(app.locals.students);
});

app.post('/students', (req, res, next) => {
    if(Object.keys(req.body).length===0)
         res.status(500).json({message: 'Body is missing'});
    else{
        if(!req.body.name && !req.body.surname && !req.body.age)
            res.status(500).json({message: 'Invalid body format'});
        else {
            if(req.body.age<0)
                res.status(500).json({message: 'Age should be a positive number'});
            else{
                if(app.locals.students.find(student=>student.name===req.body.name))
                    res.status(500).json({message: 'Student already exists'});
                else{
                    app.locals.students.push({
                        name:req.body.name,
                        surname:req.body.surname,
                        age:req.body.age
                    });
                res.status(201).json({message: 'Created'});
            }
            
        }
            
        }
        
    }
    
})

module.exports = app;