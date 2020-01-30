let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)


describe('characters', () => {
	describe('/POST characters', () => {
		it('it should add a character', (done) => {
			chai.request(server)
				.post('/characters')
				.send({id : 3, name : 'tim'})
				.end((err, res) => {
					res.should.have.status(201)
					should.exist(res.body)
					res.body.should.have.property('message').eql('created')
					done()
				})
		})
		it('it should return an error', (done) => {
			chai.request(server)
				.post('/characters')
				.send({id : 4})
				.end((err, res) => {
					res.should.have.status(400)
					should.exist(res.body)
					res.body.should.have.property('message').eql('malformed request')
					done()
				})
		})
		it('result should be in get listing', (done) => {
			chai.request(server)
				.get('/characters')
				.end((err, res) => {
					res.should.have.status(200)
					should.exist(res.body)
					res.body.should.be.a('array')
					res.body.length.should.be.eql(3)
					done()
				})
		})
		it('result should be what we sent', (done) => {
			chai.request(server)
				.get('/characters')
				.end((err, res) => {
					res.should.have.status(200)
					should.exist(res.body)
					res.body.should.be.a('array')
					res.body.should.deep.include({id : 3, name : 'tim'})
					done()
				})
		})		

	})
})

