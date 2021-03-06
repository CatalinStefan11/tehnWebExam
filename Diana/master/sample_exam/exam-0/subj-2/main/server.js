const express = require("express")
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.locals.characters = [{
	id : 1,
	name : 'jim'
}, {
	id : 2,
	name : 'jane'
}]

app.get('/characters', (req, res) => {
	res.status(200).json(app.locals.characters)
})

app.post('/characters', (req, res) => {
	if(req.body && req.body.id && req.body.name)
		{
			let id=req.body.id;
			let name=req.body.name;
		app.locals.characters.push({id,name});
		res.status(201).json({message:'created'})
		}
	else {
		res.status(400).json({message : 'malformed request'})
		
	}
	// TODO i should add a character to the list if an id and a name have been provided and return a code of 201 and a message of {'message' : 'created'}. Otherwise i should return a code of 400 and a message of {'message' : 'malformed request'}
})

app.listen(8080)

module.exports = app