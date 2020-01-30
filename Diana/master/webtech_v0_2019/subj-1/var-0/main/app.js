/*
 - funcția distance primește ca parametrii două array-uri
 - fiecare element poate apărea cel mult o dată într-un array; orice apariții suplimentare sunt ignorate 
 - distanța dintre cele 2 array-uri este numărul de elemente diferite dintre ele
 - dacă parametrii nu sunt array-uri se va arunca o excepție ("InvalidType")
*/
/*
 - the distance function receives as parameters two arrays
 - each element can appear in each array at most once; any duplicates are ignored
 - the distance between the 2 arrays is the number of different elements between them
 - if the parameters are not arrays an exception is thrown ("InvalidType")
*/

function distance(first, second){
	let me = [...new Set(first)]
	let other = [...new Set(second)]
	if (!Array.isArray(me) || !Array.isArray(other)){
		throw new Error('InvalidType')
	}
	let diffCount = 0
	for (let item of me){
		if (other.indexOf(item) === -1){
			diffCount++
		}
		else{
			other.splice(other.indexOf(item), 1)	
		}
	}
	diffCount += other.length
	return diffCount
}


module.exports.distance = distance