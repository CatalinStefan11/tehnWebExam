


function addTokens(input, tokens){

function isString (obj) {
  return (Object.prototype.toString.call(obj) === '[object String]');
}

	if(isString(input) && input.length<6){
		throw 'Input should have at least 6 characters'

	}else
	if(!(isString(input))){
		throw 'Invalid input'
	}else
	{
		if(Array.isArray(tokens)){
			for(let i =0;i< tokens.length;i++){
			if(!(typeof tokens[i].tokenName==='string' )){
				throw 'Invalid array format'
			}else{
				if(!(input.includes('...')))
					return input
				else{
					while(input.includes('...')){
						input=input.replace('...',"${"+tokens[0].tokenName+"}")
						tokens.push(tokens[0])
						tokens.shift();
					}
						
					
					return input
				}
				
			}
		}
		
		}
	}
   
}

const app = {
    addTokens: addTokens
}

module.exports = app;