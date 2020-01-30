const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.products = [
    {
        name: "Iphone XS",
        category: "Smartphone",
        price: 5000
    },
    {
        name: "Samsung Galaxy S10",
        category: "Smartphone",
        price: 3000
    },
    {
        name: "Huawei Mate 20 Pro",
        category: "Smartphone",
        price: 3500
    }
];

app.get('/products', (req, res) => {
    res.status(200).json(app.locals.products);
});

app.post('/products', (req, res, next) => {
    try {

    

        if(Object.keys(req.body).length === 0 && req.body.constructor === Object) {
             res.status(500).json({ message: "Body is missing" })
         }
        if (req.body.name && req.body.category && req.body.price) {
            if (req.body.price < 0) {
                res.status(500).json({ message: "Price should be a positive number" })
            }
            else{
                for(let i = 0; i < app.locals.products.length; i++){
                    if(app.locals.products[i].name == req.body.name){
                        res.status(500).json({message: "Product already exists"})
                        return;
                    }
                }
                app.locals.products.push(req.body)
                res.status(201).json({message: "Created"})
                console.log(app.locals.products)
            }
            
            
        } else {
            res.status(500).json({ message: "Invalid body format" })
        }

  
    } catch (err) {
        console.warn(err.stack)
    }
    res.status(400).json({ message: 'Bad request' });
})

module.exports = app;