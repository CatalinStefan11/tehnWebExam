 /*
 - funcția capitalize primește ca parametrii un string și un array
 - dicționarul conține o serie de termeni
 - in textul ințial cuvintele sunt separate de spațiu
 - fiecare termen din dicționar trebuie să apară capitalizat în rezultat
 - rezultatul este un string nou, fără modificarea celui inițial
 - dacă textul nu este un string sau dicționarul nu este un array de string-uri se va arunca o excepție (mesajul TypeError)
*/


function capitalize(text, dictionary){
    if(!Array.isArray(dictionary))
        throw new Error('TypeError');
    else{
        for(let elem of dictionary)
            if(typeof elem !== 'string')
                 throw new Error('TypeError');
    }
    
	var array=text.split(' ');
	for(var i=0;i<array.length;i++)
	    if(dictionary.indexOf(array[i])!==-1)
	        {
	            array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
	        }

	var textCapitalized='';
	for(let i=0;i<array.length-1;i++)
	    textCapitalized+=array[i] + ' ';
	textCapitalized+=array[array.length-1];
	
	return textCapitalized;
}


module.exports.capitalize = capitalize