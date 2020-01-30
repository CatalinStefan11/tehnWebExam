function textProcessor(input, tokens){
    if(typeof input !== 'string')
        throw new Error('Input should be a string')
    if(input.length<6)
        throw new Error('Input should have at least 6 characters')
    
    for(let elem of tokens)
        if(typeof elem.tokenName !== 'string' || typeof elem.tokenValue !== 'string')
            throw new Error('Invalid array format')
    for(let elem of tokens)
        if(input.includes("${" + elem.tokenName + "}"))
            input=input.replace("${" + elem.tokenName + "}",elem.tokenValue);
            
    return input;
}

const app = {
    textProcessor: textProcessor
};

module.exports = app;