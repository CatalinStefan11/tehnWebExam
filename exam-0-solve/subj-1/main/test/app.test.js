let assert = require('assert')

describe('calculateProduct', function(){
	let calculateProduct = require('../app').calculateProduct
	it('returns 1', function(){
		assert.equal(calculateProduct([1,2,3]), 1)
	})
	it('returns 180', function(){
		assert.equal(calculateProduct([1,2,3,10,11,12,14,15,20,23]), 180)
	})
	it('throws an exception', function(){
		assert.throws(() => calculateProduct([1,2,3,"a",11,12,14,15,20,23]), Error, 'Conversion error')
	})
	it('returns 1', function(){
		assert.equal(calculateProduct([]), 1)
	})
	it('returns 21', function(){
		assert.equal(calculateProduct([21]), 21)
	})
})