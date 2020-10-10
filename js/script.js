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
  {quote: "I have no special talents. I am only passionately curious.", source: 'Albert Einstein', citation: 'none', year: 'none', tag: 'Humor'},
  {quote: "The greatest wealth is to live content with little.", source: 'Plato', citation: 'none', year: 'none', tag: 'Philosophy'},
  {quote: "Mr. Gorbachev, open this gate. Mr. Gorbachev...Mr. Gorbachev, tear down this wall!", source: 'Ronald Reagan', citation: 'Brandenburg Gate, West Berliln, West Germany', year: 1987, tag: 'Politics'},
  {quote: "Victory goes to the player who makes the next-to-last mistake.", source: 'Chessmaster Savielly Grigorievitch Tartakower', citation: 'none', year: 'none', tag: 'Sports'},
  {quote: "A people that values its privileges above its principles soon loses both.", source: 'Dwight D. Eisenhower', citation: 'Inaugural Address', year: 1953, tag: 'Politics'},
  {quote: "Now I am become death, the destroyer of worlds.", source: 'Robert J. Oppenheimer', citation: 'citing from the Bhagavad Gita, after witnessing the world\'s first nuclear explosion', year: 1945, tag: 'War'},
  {quote: "We don't like their sound, and guitar music is on the way out.", source: 'Decca Recording Co.', citation: 'rejecting the Beatles', year: 1962, tag: 'Music'},
  {quote: "We are not retreating - we are advancing in another Direction.", source: 'General Douglas MacArthur', citation: 'none', year: 'none', tag: 'Humor / War'},
  {quote: "Those who believe in telekinetics, raise my hand.", source: 'Kurt Vonnegut', citation: 'none', year: 'none', tag: 'Humor'},
  {quote: "I'm the king of the world. You must listen to me. I am the greatest! I can't be beat!", source: 'Muhammad Ali', citation: 'After defeating Sonny Liston for the first time', year: 1964, tag: 'Sports'},
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(min, max) {
    min = 0;
    max = quotes.length; // sets the max number to the length of quotes array
    numb =  Math.floor(Math.random() * (max - min) + min);
    return quotes[numb]; // returns a random quote
}

/* The `random_color` function  will populate the rgb numbers
*  needed to generate a random color, the value were only setInterval
*  to 200 so only darker colors will be produced*/
function random_color() {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.background = bgColor;
    }


/***
 * `printQuote` function
***/
const printQuote = ()  => {
  random_color(); // calls the random_color function
  let quoteSelect = getRandomQuote(); // sets the random quote to a varible by calling the getRandomQuote function

  // if else-if statements to display the quote correctly depending on the quote fields that contain values.
  if (quoteSelect.year ==='none' && quoteSelect.citation === 'none') {
    let quote =  `
        <p class="quote">${quoteSelect.quote}</p>
        <p class="source">${quoteSelect.source}<span class="citation">${quoteSelect.tag}</span></p>
        `;

        return document.getElementById('quote-box').innerHTML = quote;
  }
  else if (quoteSelect.citation ==='none') {
    let quote =  `
        <p class="quote">${quoteSelect.quote}</p>
        <p class="source">${quoteSelect.source}<span class="year">${quoteSelect.year}</span><span class="citation">${quoteSelect.tag}</span></p>
        `;

        return document.getElementById('quote-box').innerHTML = quote;
  }
  else if (quoteSelect.year ==='none') {
    let quote =  `
        <p class="quote">${quoteSelect.quote}</p>
        <p class="source">${quoteSelect.source}<span class="citation">${quoteSelect.citation}</span><span class="citation">${quoteSelect.tag}</span></p>
        `;

        return document.getElementById('quote-box').innerHTML = quote;
  } else {
    let quote =  `
        <p class="quote">${quoteSelect.quote}</p>
        <p class="source">${quoteSelect.source}<span class="citation">${quoteSelect.citation}</span><span class="year">${quoteSelect.year}</span><span class="citation">${quoteSelect.tag}</span></p>
        `;

        return document.getElementById('quote-box').innerHTML = quote;
  }
}

// Initailly calls printQuote() in a while loop to populate the screen when first open then
// breaks the loop and  calls printQuote() and generates a new one every ten seconds.
while(true) {
  printQuote();
  break;
}
setInterval(function(){ printQuote(); }, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
