let currentQuoteIndex = 0;

export default function QuotesView(props) {
    return `
<div id="my-quotes">
<!--    <div class="card">-->
        
<!--    </div>-->
</div>
`
}
function addQuote() {
    let quoteCards = document.querySelector("#my-quotes");
    // for (let i = 0; i < quotesArry.length; i++) {

        quoteCards.innerHTML += `
<div class="card quotescard">
     <q>${quotesArry[currentQuoteIndex].quote}</q><p><q>${quotesArry[currentQuoteIndex].author}</q></p>   
</div>`;
        currentQuoteIndex++;
        if (currentQuoteIndex === 10){
            document.querySelector("body").removeEventListener("click", addQuote);

            // currentQuoteIndex = 0;
        }
    // }
}
export function QuotesEvents() {
    document.querySelector("body").addEventListener("click", addQuote);
}

