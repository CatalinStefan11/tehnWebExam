function toCamelCase(input){
	if(typeof input === 'number')
	    throw new Error('Input must be a string primitive or a string object')
	if(typeof input === 'undefined')
	    throw new Error('Input must be a string primitive or a string object')
	    
	let array=[];
	if(input.includes('-'))
	    array=input.split('-');
	if(input.includes('_'))
	    array=input.split('_');
	if(input.includes(' '))
	    array=input.split(' ');
	input=array[0].toLowerCase();
	for(let i=1;i<array.length;i++){
	    array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
	    input+=array[i];
	}
	  
	return input;
}

const app = {
  toCamelCase: toCamelCase
}

module.exports = app