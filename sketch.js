// --- EXERCISE ---
//Starting code
let basket = ["apple", "banana", "orange", "pear"];

//Read from the array
// Log the first fruit
console.log(basket[0]);
// Log the last fruit 
console.log(basket[basket.length -1]);

//Modify the basket
// Change "banana" to "kiwi"
// for (let i = 0; i < basket.length; i++) {
// 	if (basket[i] = "banana"){
// 		bananaIndex = i;
// 	}
// }

let bananaIndex = basket.indexOf("banana");
console.log("Basket before:")
console.log(basket)
basket[bananaIndex] = 'Kiwi';
console.log("Basket after:")
console.log(basket)




// Remove last fruit
basket.pop();
console.log("Basket after removing last fruit:");
console.log(basket);

// Add "mango" to the start of array
basket.unshift("mango");
console.log("Basket after ading mango:");
console.log(basket);

// Loop through the basket and log each fruit
for (let i = 0; i < basket.length; i++) {
	console.log(`Fruit ${i+1}: ${basket[i]}`);
}

// Searc for "orange";
let orangeIndex = -1;
for (let i = 0; i < basket.length; i++) {
	if (basket[i] === "orange"){
		orangeIndex = i;
		}	}
 if (orangeIndex !== -1){
	console.log(`Orange found at index ${orangeIndex}`);
 }
 else {
		console.log("Orange not found");
	}

// let orangeIndex = basket.indexOf("orange");
// if (orangeIndex !== -1)

// New array
let basketMid = Math.floor(basket.length/2); // Floor rounds down

let citrus = basket.slice(basketMid-1, basketMid+1);
console.log(citrus);
//Notes
//Array - Collection of objects/values
let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"]; //Array -> always []! 
console.log(names[0]);

//Declaring variables and assigning values
//Hard to manage, loop and scale.
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Cherry";
let fruit4 = "Date";
let fruit5 = "Elderberry";
console.log(fruit3);
console.log(fruit5);
console.log("---");

//Creating an array
let colours = ["Red", "Green", "Blue", "Yellow", "Purple"];
console.log(colours);

//Accessing elements/items
console.log("First colour in array (index 0) "+colours[0]);
console.log("Third colour in array (index 2) "+colours[2]);

//Changing elements/items
colours[1] = "Orange";
colours[3] = "Light Yellow";
console.log("Green has been changed to "+colours[1]);
console.log("Yellow has been changed to "+colours[3]);
console.log(colours);

//Array length
console.log("Length of array = "+colours.length); //Always 1 greater than index value (0-4)

//Adding elements/items (End of Array)
colours.push("Indigo"); //Push adds item to end of array
console.log(colours[3] + " has been added");
console.log(colours);
console.log("---");

//Removing items/elements (Last item)
let pets = ["Dog", "Cat", "Rabbit"];
console.log(pets); 
console.log("Array length before pop: " + pets.length); 
pets.pop(); //Removes last item
console.log(pets);
console.log("Array length after pop: " + pets.length);

//Looping through arrays
// Note i < pets.length
for (let i = 0; i < pets.length; i++){
	console.log(pets[i])
};

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
