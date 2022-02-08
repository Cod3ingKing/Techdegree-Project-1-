/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {quote: `${"Never follow anyone else's path. Unless you're in the woods and you're lost and you see a path. Then by all means follow that path."}`,source:' Ellen DeGeneres'},
  {quote: `${"I only have a minute; only sixty seconds in it; didin't seek it, didin't choose it, but it's up to me to use it. Just a tiny little minute... but eternity is in it."}`,source:' Benjamin Elijah Mays'},
  {quote: `${"Every man and woman is born into the world to do something unique and something distinctive and if he or she does not do it, it will never be done."}`,source:' Benjamin Elijah Mays'},
  {quote: `${"One can have no smaller or greater mastery than mastery of oneself."}`,source:' Leonardo da Vinci',year:' 1993',tags:' History'},
  {quote: `${"Eloquence is a painting of the thoughts"}`,source:' Blaise Pascal',citation:' the house of love', tags:' Art'},
  {quote: `${"I want to learn all those words so I can insult people without them knowing."}`,source:' Sam Burns',citation:' the house of love'}

];

const colorArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];



/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  const randomNumber = Math.floor (Math.random() * quotes.length);

  return (quotes[(randomNumber)]);
}


function getRandomHexValue(){

  let color = '#';
  for (let i=0; i<6; i++) {
      color += getRandomHexValue();
  }
element.styles.backgroundColor = getRandomHexValue([(randomValue)]);
  // document.body.style.backgroundColor = 'rgb(' + Math.round (Math.random() *255)';


}
// console.log (getRandomQuote().quote);

// let random =
// let quote = a[random];

// for (let i = 0;i > quotes.length; i++){
//
// let quote = quotes[i].quote;
// let source = quotes[i].source;



// console.log (quotes[getRandomQuote ()].quote );
// for (let i = 0;i < quotes.length; i++)



/***
 * `printQuote` function
***/
function printQuote(){
  const randQuote = getRandomQuote();


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




document.getElementById('quote-box').innerHTML = htmlString;
}



// ;
// const randSource = quotes[getRandomQuote ()].source

// const htmlQuote = 'hello';

// <p class = "quote"> `${quotes[getRandomQuote ()].quote}` </p>
// <p class = "source"> `${quotes[getRandomQuote ()].source}`
//
//
//
// </p>







// document.getElementById('quote-box').innerHTML = html;

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
