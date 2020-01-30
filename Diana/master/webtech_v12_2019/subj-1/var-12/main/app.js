class Shape{
	constructor(dimensions){
		this.dimensions = dimensions
	}
	area(){
		throw new Error('not implemented');
	}
}

class Square extends Shape{
	constructor(width)
	{
		super(width);
	}
	area(){
		return this.dimensions.width*this.dimensions.width;
	}
}
class Circle extends Shape{
	constructor(radius)
	{
		super(radius);
	}
	area(){
		return Math.PI *Math.pow(this.dimensions.radius,2);
	}
}
class Rectangle extends Shape{
	constructor(width,height)
	{
		super(width,height);
	}
	area(){
		return this.dimensions.width*this.dimensions.height;
	}
}

// TODO: Square, Circle, Rectangle

const app = {
  Shape: Shape,
  Square : Square,
  Circle : Circle,
  Rectangle : Rectangle
}

module.exports = app