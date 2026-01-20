
let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"]; //Array, always []! Collection of objects/values
console.log(names[0]);

let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Cherry";
let fruit4 = "Date";
let fruit5 = "Elderberry";
console.log(fruit3);
console.log(fruit5);

let colours = ["Red", "Green", "Blue", "Yellow", "Purple"];
//Accessing elements/items
console.log(colours[0]);
console.log(colours[2]);
//Changing elements/items
colours[1] = "Light Green";
colours[3] = "Light Yellow";
//Array length
console.log(colours.length); //Always 1 greater than index value (0-4)

//Adding elements/items
colours.push("Indigo"); //Push adds item to end of array

//Removing items/elements (Last item)
let pets = ["Dog", "Cat", "Rabbit"];
console.log(pets); 
console.log("Array length before pop: " + pets.length); 
pets.pop(); //Removes last item
console.log(pets);
console.log("Array length after pop: " + pets.length);

//Looping through arrays
for (let i = 0; i < pets.length; i++){
	console.log(pets[i])
}

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
