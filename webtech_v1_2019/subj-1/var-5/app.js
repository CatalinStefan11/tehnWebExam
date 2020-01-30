function textProcessor(input, tokens) {


    function isString(obj) {
        return (Object.prototype.toString.call(obj) === '[object String]');
    }

    if (!isString(input)) {
        throw 'Input should be a string';
    }

    if (input.length < 6) {
        throw 'Input should have at least 6 characters'
    }

    if (Array.isArray(tokens)) {
        console.log(input);

        
        for (let i = 0; i < tokens.length; i++) {
            
            if(!(typeof tokens[i].tokenName === 'string') 
            && !(typeof tokens[i].tokenValue === 'string')){
                throw 'Invalid array format';
            } 
            if(!(input.includes(tokens[i].tokenName))){
                return input;
            }
        }
        for (let i = 0; i < tokens.length; i++) {
            
           if(input.includes("${" + tokens[i].tokenName + "}")){
               input = input.replace("${" + tokens[i].tokenName + "}", tokens[i].tokenValue)
               console.log(input);

           }
        }
        
    }
    return input;
}


const app = {
    textProcessor: textProcessor
};

module.exports = app;