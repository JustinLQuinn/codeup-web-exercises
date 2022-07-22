export default function QuotesView(props) {
    return `
<div id="my-quotes">
<!--    <div class="card">-->
        
<!--    </div>-->
</div>
`
}

export function QuotesEvents() {
    let quoteCards = document.querySelector("#my-quotes");
    document.querySelector("body").addEventListener("click", addQuote);

    function addQuote() {
        for (let i = 0; i < quotesArry.length; i++) {


            quoteCards.innerHTML += `
<div class="card">
     <q>${quotesArry[i].quote}</q><p><q>${quotesArry[i].author}</q></p>   
</div>`
        }
    }
}

