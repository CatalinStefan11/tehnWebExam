/*
 - funcția translate primește ca parametrii un string și un obiect
 - funcția aruncă excepții dacă tipurile nu sunt respectate (mesajul "InvalidType")
 - obiectul dicționar are în cheie valoarea inițială și în valoare traducerea ei
 - valorile din dicționar sunt string-uri
 - funcția înlocuiește fiecare cheie din dicționar găsită în textul inițial cu valoarea tradusă
*/



function translate(text, dictionary){
	if(typeof text !== 'string' || dictionary==null)
		throw new Error("InvalidType")
	if(dictionary.length==0)
		return text; 
	
	var array=text.split(" ");
	for(let elem of Object.keys(dictionary))
	{
		let poz=array.indexOf(elem);
		if(poz!==-1)
			array[poz]=dictionary[elem]
	}
	return array.join(' ');
}


module.exports.translate = translate