
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
   let cities = ["Paris", "London", "Rome", "Berlin", "Madrid", "Athens", "Budapest", "Moscow", "Zurich"];
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

/*  Used some basic backup information for the functions Math.random() and Math.floor()
    from W3schools.com.  Specifically https://www.w3schools.com/jsref/jsref_random.asp and 
    https://www.w3schools.com/jsref/jsref_floor.asp.  Also, used some class notes, specifically
    the random die example.  */



/*  As a user, I want a form of entertainment to be randomly selected for my day trip. [5 points]*/

let entertainment = ["golf","theater","baseball","football","soccer","movies","concert"];

let entertain = [""];

let enjoy = Math.random() * entertainment.length;

entertain += Math.floor(enjoy);



console.log(entertainment[entertain]);

/*  This is the same code as transportation above.  I found some information at
    www.w3schools.com for the functions used.  */


/*  As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation,
and/or form of entertainment if I don't like one or more of those things. [15 points] 

    Use a while loop to set conditions for the options to be chosen.  Need to make variables
    to test whether a prompt answer of "Yes" or "No" will result in another random option
    for the user to choose.  This has to be done for all 4 options.  The variables are already
    active on this file.  I may take all the console.log()'s into play, possibly as if else
    statements.  */

let i = 0;
//let chooseCities = cities.length;
let aaa = confirm(cities[i] + " " + "Would you like to vist a different city?");
// let bbb = prompt("Would you like to go to a different restaurant? Yes/No");
// let ccc = prompt("Would you like to move about with a different mode of transport? Yes/No");
// let ddd = prompt("Would you like to go to a different entertainment? Yes/No");
let aaacities = [""];
aaacities += cities[i];
let j = true;
let d = false;

while(i < cities.length && aaa === j){


//cities[i];

    // i++;
}

    if(cities.repeat(confirm("Shall you choose another?"))){

    }
    
        else if(cities[i] === d)

        
    




//while(i = 0 && i < cities.length && aaa === j && confirm(cities[i] + " " + "Try Again") || aaa === d){
    
//    i++;

    
    //let choicecities = cities[i];
    //i++;

    //if(i <= cities.length && aaa === confirm(aaa)){

 

//console.log(cities[i]);

/*    let i = 0;
    let arrayLength = array.length;
    while(i < arrayLength ) {
       let val = array[i];
       i++;
    }
*/


    

    //aaa = j;
    //}
    //if(aaa = d){


    //}

    


        console.log(cities[i] + ":  " + "You picked a marvelous city to discover.");

    

    //  Got some glancing help for while/for loops and the prompt() from w3schools.com
    //  under those topics.  Really less than a minute total.  Building on what I'm
    //  starting to understand.



 /*|| bbb === Yes === server(restaurants) || ccc === Yes === (result[stuff]) || ddd === Yes === (entertainment[entertain])*/

  //  if(aaa === "No" === alert(aaacities) + "You've chosen an amazing city to visit!"){



    //}


    

    
    
        
    
    
    
    /*bbb === No === false || ccc === No === false)*/

/*  As a user, I want to be able to confirm that my day trip is "complete" once I like all of the random
selections.  [10 points] */















/*  As a user, I want to display my completed trip in the console. [10 points] */

















//  As a developer, I want all of my functions to have a Single Responsibility.  

