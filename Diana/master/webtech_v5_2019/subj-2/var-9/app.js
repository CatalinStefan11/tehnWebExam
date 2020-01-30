const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.cars = [
    {
        make: "BMW",
        model: "X6",
        price: 50000
    },
    {
        make: "Lamborghini",
        model: "Huracan",
        price: 200000
    },
];

app.get('/cars', (req, res) => {
    res.status(200).json(app.locals.cars);
});

app.post('/cars', (req, res, next) => {
    if(Object.keys(req.body).length==0)
        res.status(500).json({message:"Body is missing"});
    else{
        if(!req.body.make && !req.body.model && !req.body.price)
            res.status(500).json({message:"Invalid body format"});
            else{
                if(req.body.price<0)
                    res.status(500).json({message:"Price should be a positive number"});
                else{
                    if(app.locals.cars.find(car => car.model === req.body.model))
                        res.status(500).json({message:"Car already exists"});
                    else{
                        app.locals.cars.push({
                            make:req.body.make,
                            model:req.body.model,
                            price:req.body.price
                        });
                        res.status(201).json({message:"Created"})
                    }
                }
            }
    }
})

module.exports = app;