function addTokens(input, tokens){
    if(typeof input !== 'string')
        throw new Error("Invalid input");
    if(input.length<6)
        throw new Error("Input should have at least 6 characters");
    for(let elem of tokens)
        if(typeof elem.tokenName !== 'string')
             throw new Error("Invalid array format");
    if(!input.includes("..."))
        return input;
    else{
        input=input.replace("...", "${" + tokens[0].tokenName+ "}");
        return input;
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;