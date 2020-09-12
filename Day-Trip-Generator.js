
/*  Need to make good consistent solid commits [5 points]*/

/*  As a user, I want a destination to be randomly
selected for my day trip. [5 points]
1. Need a function to find a random number times a function that turns it
   into an integer to be consoled to an array of cities.  As the function is
   reset a new city is choosen based on the Math.random.  */

   function choice(cities)
{
return cities[Math.floor(Math.random() * cities.length)];
   
}
   var cities = ["Paris", "London", "Rome", "Berlin", "Madrid", "Athens", "Budapest", "Moscow", "Zurich"];
    console.log(choice(cities));
{


}

/*  Got the information for this random output of an array from
    www.w3resource.com.  "JavaScript: Get a random item from an array."
    It also works with numbers from an array.  */



/*  As a user, I want a restauerant to be randomly selected for my day trip. [5 points]


*/

function server(restaurants){

return restaurants[Math.floor(Math.random() * restaurants.length)];
}

{
var restaurants = ["Dennys","Ponderosa","Perkins","McDonalds","Olive Garden","Greek Restaurant","Applebees"];

}

console.log(server(restaurants));









/*  As a user I want a mode of transportation to be randomly selected for my day trip [5 points]*/

let result= ["car","plane","tank","ship","bicycle","truck","limo"];

let stuff = [""];

 let addTransport = Math.random() * result.length;


 stuff += Math.floor(addTransport);



console.log(result[stuff]);



/*  As a user, I want a form of entertainment to be randomly selected for my day trip. [5 points]*/














/*  As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation,
and/or form of entertainment if I don't like one or more of those things. [15 points] */












/*  As a user, I want to be able to confirm that my day trip is "complete" once I like all of the random
selections.  [10 points] */















/*  As a user, I want to display my completed trip in the console. [10 points] */

















/*  As a developer, I want all of my functions to have a Single Responsibility.  Remember,
each function should do just one thing! [5 points]  */






























