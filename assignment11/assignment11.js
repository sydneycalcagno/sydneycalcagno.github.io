
const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', nQuote);
window.addEventListener('load', nQuote);

const endpoint = 'https://catfact.ninja/fact';



function displayQuote(newFact){
    const txt = document.querySelector('#js-quote-text'); 
    txt.textContent = newFact;
}

async function nQuote(){

    let response = await fetch(endpoint);
    let data = await response.json(); 
    
    newFact = data.fact;
    displayQuote(newFact);
}

const bn = document.getElementById('js-tweet');
bn.addEventListener('click', function click(event){
    let rnd = Math.floor(Math.random() * 7);
    if(rnd == 1){
        document.body.style.backgroundColor = 'red';
    }
    if(rnd == 2){
        document.body.style.backgroundColor = 'orange';
    }
    if(rnd == 3){
        document.body.style.backgroundColor = 'yellow';
    }
    if(rnd == 4){
        document.body.style.backgroundColor = 'green';
    }
    if(rnd == 5){
        document.body.style.backgroundColor = 'blue';
    }
    if(rnd == 6){
        document.body.style.backgroundColor = 'pink';
    }
});

