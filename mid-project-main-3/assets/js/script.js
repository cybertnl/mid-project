
const urlKanye = "https://api.kanye.rest";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

fetch(urlKanye, requestOptions)
  .then(response => response.json())
  .then(kanyeQuote)
  .catch(error => console.log('error', error));

function kanyeQuote (quoteData) {
    console.log(quoteData)
    const quoteContainer = document.getElementById("kanye");
    const quote = document.createElement("p");
    quote.innerHTML = quoteData.quote;
    console.log("this is quote", quote);
    quoteContainer.appendChild(quote);
};

// Local Storage

// Put the object into storage
<script src="mainpage.html"></script>
localStorage.setItem('input-name', JSON.stringify(name));
console.log(input-name);
