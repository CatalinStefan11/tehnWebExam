/*
funcția calculateProduct primește ca parametru o listă de valori numerice și returnează produsul tuturor valorilor divizibile cu 3 mai mari ca 11
pentru o listă vidă funcția returnează 1
*/
function calculateProduct(array){
	array.forEach((e) => {
		if (typeof e !== 'number'){
			throw new Error('Conversion error')
		}
	})
	return array.filter((e) => e > 11 && !(e % 3)).reduce((a, e) => a * e, 1)
}


module.exports.calculateProduct = calculateProduct