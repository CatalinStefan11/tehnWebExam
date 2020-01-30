/*
Exista un tip obiectual definit (Bird)
Să se definească tipul Penguin.
Un pinguin este un tip copil pentru Bird și are în plus metoda swim(distance)
Un pinguin nu poate fi creat fără un nume de tip string
Un pinguin nu poate să zboare și va spune asta dacă i se cere
Dacă se apelează makeNest, un pinguin va apela metoda părintelui său
Vedeți testele pentru formatul exact al mesajelor
*/


class Bird {
	constructor(name){
		this.name = name
	}

	fly(distance){
		return `${this.name} flies ${distance}`
	}

	makeNest(){
		return `${this.name} makes a nest`
	}
}


// TODO: implementați tipul Pinguin
// TODO: implement the Penguin type

class Penguin extends Bird{
	constructor(name){
		if(name==null || typeof(name) === 'undefined')
			throw new Error("CreationError");
		super(name);
	}
	
	swim(distance){
		return `${this.name} swims ${distance}`
	}
	
	fly(distance){
		return `${this.name} is a penguin and cannot fly`
	}
}

module.exports.Bird = Bird
module.exports.Penguin = Penguin