let currentQuoteIndex = 0;
let quotes = [];
export default function QuotesView(props) {
    quotes = props.quotes
    // console.log(props);
    return `
<div id="my-quotes">
<!--    <div class="card">-->
        
<!--    </div>-->
</div>
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
        if (currentQuoteIndex === 3){
            document.querySelector("body").removeEventListener("click", addQuote);

        }
}
export function QuotesEvents() {
    document.querySelector("body").addEventListener("click", addQuote);
}

