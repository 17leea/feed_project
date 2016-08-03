// This is the new way of creating JavaScript classes. It's not really a function.
function Dish(title, imageURL, description, ingredients, price) {
    this.title = title;
	this.imageURL = imageURL;
    this.description = description;
	this.ingredients = ingredients;
	this.price = price;

}

// A list of all dishes.
var dishes = [
    // Each of these lines of code makes a new dish object from the dish class
    new dish("Ramen Noodles", "images/ramen.jpeg", "Yummy!", "Gluten Free.", 12.99),
    new dish("Chocolate Cake", "images/cake.jpeg", "Not good at all!", "Vegetarian", 6.00),
    new dish("Baked Ziti", "images/bakedziti.jpeg", "The best thing ever!", "Vegan", 4.00),
//    new dish(),
//    new dish(),
//    new dish(),
//    new dish(),
//    new dish(),
//    new dish(),
//    new dish(),
//    new dish(),
//    new dish(),
]

function showdishes(dishes) {
    $(" #dishes ").empty(); // A jQuery method which clears the dishes div
    for (var i = 0; i < dishes.length; i++) {

        if(i%3==0) {
            $(" #dishes ").append("<div class='row'></div>"); // A jQuery method to add a new row for every 3rd dish
        }

        // This string is the HTML that makes up each individual dish cell,
        // It uses dish[i] attributes so that each cell has unique information
        var dishHTML = "<div class='col-md-4 dish'>" +
            "<img class='dishimage' src='" + dishes[i].imageURL + "' />" +
            "<h3 class='dishname'>" + dishes[i].title + " (" + dishes[i].price + ")</h3>" +
            "<p class='description'>" + dishes[i].description + "</p>";

        $(" #dishes .row:last-child").append(dishHTML); // A jQuery method that adds the new HTML string to the last row in the dishes div

        if(i%3==2) { $(" #dishes ").append("</div>"); }

    }
}

/* sortButtonClicked
    Calls appropriate sort method based on which link was clicked and
        repopulates movie grid.
    Input: String representing which button was clicked on

 */
function sortButtonClicked(link) {
    if (link === "low-to-high") {
        sortdisheslowtohigh(dishes);
    }
    else if (link == "high-to-low") {
        sortdisheshightolow(dishes);
    }
	else if (link== "shuffle"){
		shuffle(dishes)
	}
    showdishes(dishes);
}

/* shuffle
   Input: Array
   Output: Shuffled array
   Function courtesy of http://jsfromhell.com/array/shuffle
 */
function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

/* sortdisheslowtohigh
 You must implement a basic bubble sort algorithm to sort
 the dishes based on it's year attribute.

    Input: a list of dish objects.
    Output: Returns a list of dish objects after they have been sorted by price (low to high.)
*/
function sortdisheslowtohigh(o) {
	var swapped=true;
	while (swapped==true){
		swapped=false;
		for (var i= 0; i<o.length-1; i++){
			if (o[i].price>o[i+1].price){
				var temp = o[i];
				o[i]=o[i+1];
				o[i+1]=temp;
				swapped=true;
			}
		
		}
	}
   // alert("You have to sort the dishes by price!");
    return o;
}

/* sortdisheshightolow
 You must implement a basic bubble sort algorithm to sort
 the dishes based on it's title attribute.

  Input: a list of dish objects.
  Output: returns a list of dish objects after they have been sorted.
 */
function sortdisheshightolow(o) {
	var swapped=true;
	while (swapped==true){
		swapped=false;
		for (var i= 0; i<o.length-1; i++){
			if (o[i].price<o[i+1].price){
				var temp = o[i];
				o[i]=o[i+1];
				o[i+1]=temp;
				swapped=true;
			}
		
		}
	}

    return o;
}

// Code that gets run once the page has loaded. It also uses jQuery.
$(document).ready(function () {
    shuffle(dishes);
    showdishes(dishes);
});