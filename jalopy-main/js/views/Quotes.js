let currentQuoteIndex = 0;
let quotes = [];
export default function QuotesView(props) {
    for (let i = 0; i < props.quotes.length; i++) {
        if(props.quotes[i].quote === ''){
            props.quotes.splice(i);
        }
    }
    quotes = props.quotes
    console.log(quotes);
    return `
<div id="my-quotes">
<!--    <div class="card">-->
        
<!--    </div>-->
</div>
<a data-link href="/insert-Quote">Add Quote</a>

`
}
function addQuote() {
    let quoteCards = document.querySelector("#my-quotes");

    quoteCards.innerHTML += `
<div class="card quotescard">
     <q id="card-quote">${quotes[currentQuoteIndex].quote}</q><p id="card-author"><q>${quotes[currentQuoteIndex].author}</q></p>
</div>
`;
        currentQuoteIndex++;
        if (currentQuoteIndex === quotes.length){
            document.querySelector("body").removeEventListener("click", addQuote);

        }
}
export function QuotesEvents() {
    document.querySelector("body").addEventListener("click", addQuote);
}

