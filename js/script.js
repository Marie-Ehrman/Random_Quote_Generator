/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//declare variables like random quote and the quotes array

let randomQuote = '';

let quotes = [
  {
    quote: `Not all those who wander are lost;`,
    source: 'J.R.R. Tolkien',
    citation: 'The Fellowship of the Ring',
    year: 1954

  },
  {
    quote: `...even if that were absolutely true, then I should one day like to show by my work what such an eccentric, such a nobody, has in his heart.`,
    source: 'Vincent Van Gogh',
    
  },
  {
    quote: `The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.`,
    source: 'Isaac Asimov',
    
  },
  {
    quote: `In three words I can sum up everything I've learned about life: it goes on.`,
    source: 'Robert Frost',
    
  },
  {
    quote: `Go placidly amid the noise and haste, and remember what peace there may be in silence.`,
    source: 'Max Ehrmann',
    citation: "Desiderata",
    year: 1952

  },
  {
    quote: `To live is the rarest thing in the world. Most people exist, that is all.`,
    source: 'Oscar Wilde',

  },
  {
    quote: `Nearly all men can stand adversity, but if you want to test a man's character, give him power.`,
    source: 'Abraham Lincoln',

  }, 
  {
    quote: `The secret to getting ahead is getting started.`,
    source: 'Mark Twain',

  },
  {
    quote: `The most common way people give up their power is by thinking they don’t have any.`,
    source: 'Alice Walker',

  },
  {
    quote: `If you’re not making mistakes, then you’re not making decisions.`,
    source: 'Catherine Cook',

  },
  
];

//log test that array of quotes is functional and get it to display nicely in console

for ( let i = 0; i < quotes.length; i += 1 ){
randomQuote = quotes[i].quote;
source = quotes[i].source;

console.log(randomQuote + "\n" + source);
}


//function to retrieve a quote from the position of randomly generated number

function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  console.log(randomNumber);
  return array[randomNumber];
}

/*try out function found in 
https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
to randomly change background color on click of load quote.
*/

function randomBG() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var color = "rgb(" + x + "," + y + "," + z + ")";

//log background color to the console to test the function  
console.log(color);

  document.body.style.background = color;
  }


//build print quote function

 function printQuote(){
  randomQuote = getRandomQuote(quotes);
  console.log(randomQuote);
  let html = ' ';

//build html string

  html = 
    '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source;

//Decide if citations and/or year should be added to the string

      if(randomQuote.citation) {
        html += '<span class="citation">' + randomQuote.citation + '</span>';
      };
 
      if (randomQuote.year){
        html += '<span class="year">' + randomQuote.year + '</span>';
      };

//Add last closing p tag

  html += '</p>';

//log html string to console for testing
  console.log(html);

//Set inner html of "quote-box" to html string
  
document.getElementById("quote-box").innerHTML = html;

//call random backgorund function
randomBG();
 }


 
//call the printQuote function when button is clicked

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//set timer for screen to change, based on setInterval() MDN link provided in instructions

let quoteTimer = window.setInterval(printQuote, 10000);
