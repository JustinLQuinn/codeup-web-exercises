import createView from "../createView.js"

export default function addDogFactHTMLFunction(props) {
    return `
<form class="container">
    <h1>New Dog Fact</h1>
    <form>
        <label for="dogFactText" class="form-label">Dog fact</label>
        <input class="form-control2" list="datalistOptions" id="dogFactText" placeholder="Enter a new dog fact">
        <button class="form-control2" id="insert-btn">Insert Fact</button>
    </form>
</div>
`;
}


export function addDogFactEvents() {
const addButton = document.querySelector("#insert-btn");
addButton.addEventListener("click", addDogQuote);
}

function addDogQuote() {
    const factInput = document.querySelector("#dogFactText");
    const fact = factInput.value.trim();
    if (fact.length < 1) {
        console.log("Fact cannot be blank!");
        return;
    }
    // console.log("Fact ready to be posted.");
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': DOG_QUOTE_API_KEY
        },
        body: JSON.stringify([fact])
    }
    fetch("https://dogfacts.fulgentcorp.com:12250/v1/facts", requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log("add dog fact error: " + response.status);
            } else {
                console.log("add dog fact ok");
                createView("/dogs");
            }
        });
}
