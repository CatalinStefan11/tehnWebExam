/*
funcția calculateProduct primește ca parametru o listă de valori numerice și returnează produsul tuturor valorilor divizibile cu 3 mai mari ca 11
pentru o listă vidă funcția returnează 1
*/
function calculateProduct(array){
     array.forEach((elem)=>{
         if(isNaN(elem))
             throw new Error('Conversion error');
        
     })
    var produs=1;
    array.forEach(elem=>{
        if(elem%3===0 && elem>11)
            produs=produs*elem;
    })
	 return produs;
}


module.exports.calculateProduct = calculateProduct