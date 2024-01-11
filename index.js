console.log("chaliye shuru kte hai bina ksisi deri k");

///creating an object:
const rectangle = {

    //properties of object -> rectangle:
    breadth : 2,
    length : 5,

    //behavior of object -> rectangle:
    area: function(){
        //calculating area :
        ans = this.length*this.breadth;

        //printing area:
        console.log("Area of rectangle is = " +ans)

    }
};

// //accessing the properties & begaviour of object -> rectangle:
console.log("length of rectangle is : "+rectangle.length)
console.log("Breadth of rectangle is : "+rectangle.breadth)
console.log(rectangle.area())


//Object creating using factory fuction :
function createRectangle(length , breadth){
    ///Declaration of an object:
return rectangle = {

    //properties of object -> rectangle:
    length : length,
    breadth : breadth,

    //behavior of object -> rectangle:
    area: function(){
        //calculating area :
        ans = length*breadth;

        //printing area:
        console.log("Area of rectangle is = " +ans)

    }
};
}

// accessing the properties & begaviour of object From the function createRectangle -> rectangle:
let rectangleObj = createRectangle(10,10);
console.log("length of rectangle is : "+rectangleObj.length)
console.log("Breadth of rectangle is : "+rectangleObj.breadth)
console.log(rectangleObj.area())


//constructor Function -> follows Pascal Notation : first leter of every word is capital.
//it just declares an object only.

function Rectangle(length,breadth){
    this.length = length,
    this.breadth = breadth,

    this.area = function(){
        ans = this.length*this.breadth
        console.log("Area of rectangle is: "+ ans)
    }
}

// creating object from constructor function:
let RectangleObj = new Rectangle(20,20);
console.log("length of rectangle is : "+RectangleObj.length)
console.log("Breadth of rectangle is : "+RectangleObj.breadth)
console.log(RectangleObj.area())

//Dynamic nature of objcts -> we can add or delete properties for an object even after creating it.
//Adding a propertiy "color" for "ReactangleObj" object.
RectangleObj.color = 'yellow';
console.log("Color of rectangle is : "+RectangleObj.color);

//Deleting a propertiy "color" for "ReactangleObj" object.
delete RectangleObj.color;
console.log("Color of rectangle is : "+RectangleObj.color);

console.log(RectangleObj.constructor);
console.log(Rectangle.constructor);

