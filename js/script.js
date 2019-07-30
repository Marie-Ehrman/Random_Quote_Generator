/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


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


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

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

 }

 //call the printQuote function

 printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.