const quoteHolder = document.querySelector("#quoteshbs");
const authorHolder = document.querySelector("#author");


function getQuote() {
  fetch("/api/quotes/random")
    .then((response) => response.json())
    .then((quote) => {
 console.log(quote);
      quoteHolder.textContent = quote.quote;
      authorHolder.textContent = "--" + quote.author;
    });
}



getQuote();
