function processString(input){
    
    if(input.length===0)
        return 100;
        
    var array=input.split(' ');
    
    for(let elem of array)
        if(!parseInt(elem))
            throw new Error('Item is not a number');
            
    array=array.map(x=>parseInt(x));
    let s=0;
    for(let i=0;i<array.length;i++)
        if(array[i]%2 === 0){
            s+=array[i];
        }
    return 100-s;
}

const app = {
    processString: processString
}

module.exports = app