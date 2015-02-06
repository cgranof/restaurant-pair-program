// Part I
// defined our constructor FoodItem and defined parameters
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	// instance variables
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

// Part I prototype and string method
FoodItem.prototype.toString = function(){
	var str = this.name + ', ' + this.calories + ', ' + this.vegan + ', ' + this.glutenFree + ', ' + this.citrusFree;
	return str;
};



var pizza = new FoodItem('margherita pizza', 1100, false, false, true);

var pasta = new FoodItem('pesto pasta', 900, false, false, false);

var salad = new FoodItem('Italian salad', 500, true, true, true);

var bread = new FoodItem('Garlic bread', 300, false, false, true);

var burrito = new FoodItem('Chicken burrito', 700, true, false, true);

var guacamole = new FoodItem('Guac and chips', 500, true, true, false);

var margarita = new FoodItem('Spicy mango margarita', 1100, true, true, false);



// console.log(pizza.toString());
// console.log(pasta.toString());
// console.log(salad.toString());


// Part II
// define constructor and define parameters

///////////
// DRINK //
///////////


var Drink = function(name, description, price, ingredients){
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;

};

Drink.prototype.toString = function(){
  var str = this.name + ', ' + this.description + ', ' + this.price + ', ' + this.ingredients;
  return str;
};

var purpleDrank = new Drink('purpleDrank', 'damn that\'s purple drank', '$11.00', 'purple & water');

var margaritaDrank = new Drink('Spicy mango', 'sweet and spicy', '$16.00', [margarita]);

// console.log(purpleDrank.toString());
// console.log(margaritaDrank.toString());

///////////
// PLATE //
///////////

var Plate = function(name, description, price, ingredients){
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;
};

Plate.prototype.toString = function(){
  var str = this.name + ', ' + this.description + ', ' + this.price + ', ' + this.ingredients;
  return str;
};

Plate.prototype.restriction = function(prop){
  for (var i = 0; i < this.ingredients.length; i++) {
    if(this.ingredients[i].prop === true ) {
      return true;
    }
    return false;
  }
}

var pastaPlate = new Plate('Pesto Linguini', 'This is the best!', '$12.00', [pasta]);
var burritoPlate = new Plate('Chicken burrito', 'da bomb burrito', '$6.00', [burrito]);
var guacamolePlate = new Plate('Guac and chips','its delicious!', '$4.00', [guacamole]);

// console.log(pastaPlate.toString());
// console.log(pastaPlate.restriction('isVegan'));
// console.log(pastaPlate.restriction('isGlutenFree'));
// console.log(pastaPlate.restriction('isCitrusFree'));

// console.log(burritoPlate.toString());
// console.log(guacamolePlate.toString());
// console.log(margaritaDrank.toString());

///////////
// ORDER //
///////////

var Order = function(plates){
  this.plates = plates;
};

Order.prototype.toString = function(){
  var str = this.plates;
  return str;
};

var newWorldOrder = new Order('welcome to your order');

// console.log(newWorldOrder.toString());


//////////
// MENU //
//////////

var Menu = function(plates){
  this.plates = plates;
};

Menu.prototype.toString = function(){
  var result = ' ';
  for(var i = 0; i < this.plates.length; i++) {
    result += this.plates[i].toString();
  }

  return result;
};

var newMenu = new Menu([burritoPlate, guacamolePlate,  pastaPlate, margaritaDrank, purpleDrank]);

// console.log(newMenu);

console.log(newMenu.toString());


////////////////
// RESTAURANT //
////////////////

var Restaurant = function(name, description, menu){
  this.name = name;
  this.description = description;
  this.menu = menu;
};

Restaurant.prototype.toString = function(){
  var str = this.name + ', ' + this.description + ', ' + this.menu;
  return str;
};

var newRestaurant = new Restaurant('Pasta Jose\'s', 'mexi pasta', newMenu);

//console.log(newRestaurant.toString());


//////////////
// CUSTOMER //
//////////////

var Customer = function(dietaryPreference){
  this.dietaryPreference = dietaryPreference;
};

Customer.prototype.toString = function(){
  var str = this.dietaryPreference;
  return str;
};

var newCustomer = new Customer('choices for er\'body');

console.log(newCustomer.toString());



























// $(document).on('ready', function() {
  
// });