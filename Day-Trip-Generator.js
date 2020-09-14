
/*  Need to make good consistent solid commits [5 points]*/

/*  As a user, I want a destination to be randomly selected for my day trip. [5 points]
   
   Need a function to find a random number times a function that turns it
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
    to test whether a confirm() answer of True or False will result in another random option
    for the user to choose.  This has to be done for all 4 options.  The variables are already
    active on this file.  I may take all the console.log()'s into play, possibly as if else
    statements.  */


let j = true;
let d = false;
let i = 0;

while(i <= cities.length, confirm(cities[i] + ":  " + "Cancel to choose or ok to try again.")){

i++;

    if(cities[i] === d){

        }
    }       
        console.log(cities[i] + ":  " + "You picked a marvelous city to discover.");



        let burger = true;
        let fries = false;
        let m = 0;
    
        while(m <= restaurants.length, confirm(restaurants[m] + ":  " + "Cancel to choose or ok to try again.")){
    
            m++;
    
            if(restaurants[m] === fries){
    
            }
        }       
            console.log(restaurants[m] + ":  " + "This restaurant has a great menu.");
    
    


            let volkswagon = true;
            let nash = false;
            let q = 0;
        
            while(q <= result.length, confirm(result[q] + ":  " + "Cancel to choose or ok to try again.")){
        
                q++;
        
                if(result[q] === nash){
        
                }
            }       
                console.log(result[q] + ":  " + "Make sure you buckle up and hang on.");
        
        

                let runway = true;
                let roadway = false;
                let w = 0;
            
                while(w <= entertainment.length, confirm(entertainment[w] + ":  " + "Cancel to choose or ok to try again.")){
            
                    w++;
            
                    if(entertainment[w] === roadway){
            
                    }
                }       
                    console.log(entertainment[w] + ":  " + "Great choice!  You're your going to have a good time.");



    //  Got some glancing help for while/for loops and the confirm() function from w3schools.com
    //  under those topics.  Really less two minutes total.  Building on what I'm
    //  starting to understand coming from the class notes.  Using conditional "&&" and "||"
    //  did not work in the while loop, but the comma was a breakthrough- semi-colons don't
    //  work either.



/*  As a user, I want to be able to confirm that my day trip is "complete" once I like all of the random
selections.  [10 points] */


if((cities[i] === d) && (restaurants[m] === fries) && (result[q] === nash) && (entertainment[w] === roadway)){


}
    console.log("You have selected and completed your day trip.  Please come back again.")











/*  As a user, I want to display my completed trip in the console. [10 points] */


console.log("For my day trip I went to " + cities[i] + ", went out to eat at " + restaurants[m] + ", traveled by " + result[q] + ", and enjoyed " + entertainment[w] + " there.  What a good time.");














//  As a developer, I want all of my functions to have a Single Responsibility. [5 points] 
        