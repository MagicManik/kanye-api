const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(quote => displayQuote(quote))
}


const displayQuote = quote => {
    const setQuote = document.getElementById('quote');
    setQuote.innerText = quote.quote;
}