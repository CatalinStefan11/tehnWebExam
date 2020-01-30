

function Exception (str){
	this.message=str;
	this.name="Exception"
}

function distance (first,second){
	if(Array.isArray(first)&&Array.isArray(second)){

		if(first.length==0&&second.length==0)
			return 0;
		else{

			first=Array.from(new Set(first))//a.filter(value,pos)=>(a.indexOf(value)==pos)
			second =Array.from(new Set(second))//b.filter(value,pos)=>(b.indexOf(value)==pos)

			if(!first.length) return second.length
			if(!second.length) return first.length
			//daca nu sunt vide:


		let dist1=first.filter(value=>   
			second.indexOf(value)==-1).length 
		console.log(first + " - " + dist1)



		let dist2 = second.filter(value1=> 
			first.indexOf(value1)==-1).length
		console.log(second + " - " + dist2)


		return dist1+dist2
		
	}
}
	else
		throw new Exception("InvalidType")
		
}

module.exports.distance = distance


