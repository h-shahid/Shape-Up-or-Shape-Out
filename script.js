let squareBtn = document.getElementById("sqBtn");
let circleBtn = document.getElementById("circleBtn");
let rectangleBtn = document.getElementById("recBtn");
let triangleBtn = document.getElementById("triBtn");
let shapeDiv = document.getElementById("shape-holder");
const MIN = 0;
let Counter = 1;
const circleRadius = document.querySelector("#circleRadius"); //connects JS and HTML
const rectangle = document.querySelector('.rectangle')
//const square = document.querySelector()

circleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  return new Circle();
}); //use arrow functions when using classes and addEventListeners
squareBtn.addEventListener("click", (e) => {
  e.preventDefault();
  return new Square();
}); 
rectangleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  return new Rectangle();
}); 
triangleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  return new Triangle();
})
 
const MAX = 600;


class Shape {
  constructor(width, height, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.div = document.createElement("div");
    this.div.id = "shape" + Counter;
    Counter++;
    this.div.style.top = randomVal(MAX, MIN) + "px"; //random pixel value
    this.div.style.left = randomVal(MAX, MIN) + "px"; //helps place new div on screen in random pl
  }
}
class Circle extends Shape {
  constructor(radius) {
    super(2 * radius, 2 * radius);
    this.radius = circleRadius;
    this.div.className = "circle";
    this.circleBtn = circleBtn;
    this.div.style.width = 2 * this.radius.value + "px";
    this.div.style.height = 2 * this.radius.value + "px";
    shapeDiv.appendChild(this.div);
    console.log(this.radius.value);
  }
}
class Rectangle extends Shape {
    constructor(width, height) {
super(width, height)
this.height = height
this.width = width
this.div = document.createElement('div')
this.div.className = 'rectangle'
this.rectangleBtn = rectangleBtn
shapeDiv.appendChild(this.div)

    }

}


class Square extends Shape {
    constructor(width, height) {
        super(width, height)
        this.shape.style.height = `${this.sideLength}px`
        this.shape.style.width = `${this.sideLength}px`
        this.div.className = 'square'
        this.squareBtn = squareBtn
        shapeDiv.appendChild(this.div)
        this.shape.style.backgroundColor = 'red'
      
    }
}
class Triangle extends Shape {
    constructor(width, height, length){
        super(width, height) 
        this.height = height
        this.length = length 
        this.div.className = 'triangle'
        this.shape.style.height =`${this.height}px`
        this.shape.style.width =`${this.height}px`
        //this.shape.style.borderTop = `${this.}`
        shapeDiv.appendChild(this.div)
    }
}

function randomVal(MAX, MIN) {
 return Math.floor(Math.random() * (MAX - MIN)) + MIN;
}


