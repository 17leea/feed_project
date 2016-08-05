// This is the new way of creating JavaScript classes. It's not really a function.
function dish(title, imageURL, description, ingredients, price, rating) {
    this.title = title;
	this.imageURL = imageURL;
    this.description = description;
	this.ingredients = ingredients;
	this.price = price;
	this.rating = rating

}

// A list of all dishes.
var dishes = [
    // Each of these lines of code makes a new dish object from the dish class
    new dish("Title", "images/1.jpg", "Description", "Ingredients", 12.99, 4.5),
    new dish("Title", "images/2.jpg", "Description", "Ingredients", 4.87, 4.0),
    new dish("Title", "images/3.jpg", "Description", "Ingredients", 15.65, 3.5),
    new dish("Title", "images/4.jpg", "Description", "Ingredients", 2.89, 4.3),
    new dish("Title", "images/5.jpg", "Description", "Ingredients", 4.56, 3.5),
    new dish("Title", "images/7.jpg", "Description", "Ingredients", 13.98, 5.0),
    new dish("Title", "images/8.jpg", "Description", "Ingredients", 3.76, 4.0),
    new dish("Title", "images/9.jpg", "Description", "Ingredients", 18.90, 3.0),
    new dish("Title", "images/10.jpg", "Description", "Ingredients", 19.40, 2.0),
    new dish("Title", "images/11.png", "Description", "Ingredients", 6.79, 1.0),
    new dish("Title", "images/12.png", "Description", "Ingredients", 8.96, 1.5),
	new dish("Title", "images/13.jpg", "Description", "Ingredients", 18.96, 4.5),
	new dish("Title", "images/14.jpg", "Description", "Ingredients", 16.60, 4.5),
	new dish("Title", "images/15.jpg", "Description", "Ingredients", 4.96, 5.0),
	new dish("Title", "images/16.jpg", "Description", "Ingredients", 5.30, 4.9),
]

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
	else if (link== "rating"){
		sortrating(dishes)
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

function sortrating(o) {
	var swapped=true;
	while (swapped==true){
		swapped=false;
		for (var i= 0; i<o.length-1; i++){
			if (o[i].rating<o[i+1].rating){
				var temp = o[i];
				o[i]=o[i+1];
				o[i+1]=temp;
				swapped=true;
			}
		
		}
	}
   // alert("You have to sort the dishes by rating!");
    return o;
}