

const quoteButton = document.querySelector('.new-quote'); //grabs button class
quoteButton.addEventListener('click', nQuote); //when clicked it grabs a new quote
window.addEventListener('load', nQuote); //when the window has loaded grab new quote


const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'; //grabs the info from site

function displayQuote(trumpQuote){
    const txt = document.querySelector('#js-quote-text'); //this is where the text will appear
    txt.textContent = trumpQuote; //what words appear
}

async function nQuote() {
    
    try { //basically try this.. otherwise catch this..
      const response = await fetch(endpoint); //grab info
      
      if (!response.ok) { // if the reponse doesn't work then error
        throw Error(response.statusText);
      }
  
      const json = await response.json(); 
      displayQuote(json.message); //display
    } 
    
    catch (err) { //if try doesnt work
      console.log(err);
      alert('Failed, check connection');
    }

}
