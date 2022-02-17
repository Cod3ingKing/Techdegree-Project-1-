/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//my quotes
const quotes = [
  {quote: `${"Never follow anyone else's path. Unless you're in the woods and you're lost and you see a path. Then by all means follow that path."}`,source:' Ellen DeGeneres'},
  {quote: `${"I only have a minute; only sixty seconds in it; didin't seek it, didin't choose it, but it's up to me to use it. Just a tiny little minute... but eternity is in it."}`,source:' Benjamin Elijah Mays'},
  {quote: `${"Every man and woman is born into the world to do something unique and something distinctive and if he or she does not do it, it will never be done."}`,source:' Benjamin Elijah Mays'},
  {quote: `${"One can have no smaller or greater mastery than mastery of oneself."}`,source:' Leonardo da Vinci',year:' 1500',tags:' History'},
  {quote: `${"Eloquence is a painting of the thoughts"}`,source:' Blaise Pascal',citation:' the house of love', tags:' Art'},
  {quote: `${"I want to learn all those words so I can insult people without them knowing."}`,source:' Sam Burns',citation:' 22 Home'}

];
//background color array. Not fully finished asked for help on slack Unit 1,Feb 6 2022 8:14pm
const colorArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//

//getRandomQuote function to generate a random number and call a string from the array. C-III

function getRandomQuote(){
  const randomNumber = Math.floor (Math.random() * quotes.length);

  return (quotes[(randomNumber)]);
}

//selects a random number from the colorArray
function getRandomColor(){
  const randomNumber = Math.floor (Math.random() * colorArray.length);

  return (colorArray[(randomNumber)]);
}
// backgroundColor code. still working on it. each iteration of the loop should pick a random number between 0 and 15 and then grab it from colorArray[randomNumber]
function getRandomHexValue(){

  let color = '#';
  for (let i=0; i<6; i++) {
      color += getRandomColor();

  return (color);
  }
// should print a random color on page (not finished)
  const body = document.querySelector('body');

  body.styles.backgroundColor = getRandomHexValue();

}
//prints a random quote on page for each click

function printQuote(){
  const randQuote = getRandomQuote();

//omits quote object propertys that are undifined
  let htmlString;
  htmlString += `<p class="quote"> ${randQuote.quote} </p>`;
  htmlString += `<p class = "source"> ${randQuote.source}`;
  if(randQuote.citation) {
      htmlString += `<span class="citation">${randQuote.citation}</span>`;
  }
  if(randQuote.year) {
      htmlString += `<span class="year">${randQuote.year}</span>`;
  }
  if(randQuote.tags) {
      htmlString += `<span class="year">${randQuote.tags}</span>`;
  }
  htmlString += `</p>`;


//prints html string on page

document.getElementById('quote-box').innerHTML = htmlString;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
