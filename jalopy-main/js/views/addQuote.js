import createView from "../createView.js"

export default function addQuoteHTMLFunction(props) {
    return `
<form class="container">
    <h1>Add Your Quote</h1>
    <form>
        <label for="insertQuoteText" class="form-label">Quote</label>
        <input class="form-control3" list="datalistOptions" id="QuoteText" placeholder="Enter a new Quote">
        <input class="form-control3" list="datalistOptions" id="AuthorText" placeholder="Enter the Author">
        <button class="form-control4" id="insert-btn">Insert Fact</button>
    </form>
</div>
 `
}


export function addQuoteEvents() {
    const addButton = document.querySelector("#insert-btn");
    addButton.addEventListener("click", addNewQuote);
}
function addNewQuote (){
    const quoteInput = document.querySelector("#QuoteText");
    const quote = quoteInput.value.trim();
    const authorInput = document.querySelector("#AuthorText");
    const author = authorInput.value.trim();
    // console.log(quote);
    // console.log(quote.length);
    // console.log(author);
    // console.log(author.length);
    if (quote.length && author.length < 1) {
       alert("Please add data!");
        return;
    }
    let newQuote = {
        quote: quote,
        author: author
    }
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': DOG_QUOTE_API_KEY
        },
        body: JSON.stringify([newQuote])
    }
    fetch("https://dogfacts.fulgentcorp.com:12250/v1/quotes", requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log("add Quote fact error: " + response.status);
            } else {
                console.log("add Quote fact ok");
                createView("/quotes");
            }
        });
}