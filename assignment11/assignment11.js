const quote = document.querySelector('.new-quote'); 
quote.addEventListener('click', newInspire); 
window.addEventListener('load', newInspire);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function display(inspire){
    const text = document.querySelector('#js-quote-text');
    text.textContent = inspire; 
}


async function newInspire(endpoint) {
    try{
        const resposne = await fetch(endpoint);

        if (!response.ok) { 
            throw Error(response.statusText);
        }

        const json = await response.json(); 
        display(json.message);
    }
    catch (err) { //if try doesnt work
        console.log(err);
        alert('Failed, check connection');
    }
}