export default function dogFactsHTMLFunction(props) {
    // console.log(props);
    return `
    <h1>Dog Facts</h1>
    <div class="container-fluid"> 
       
    ${makeDogFactCards(props.dogFacts)}
    
    <button class="form-control" id="show-fact-btn">Show Facts</button>
</div>
<a data-link href="/insert-dog-fact">Insert Dog Fact</a>
`;
}
function makeDogFactCards(dogFacts) {
    let html = "";
    dogFacts.forEach(function(dogFact) {
        html += makeDogFactCard(dogFact);
    });
    return html;
}
function makeDogFactCard(dogFact) {
    return `
<div class="card">
    <div class="card-body">
        <p class="dog-fact" style="visibility: hidden">${dogFact}</p>
    </div>
</div>
        `;
}


export function DogFactsEvents() {
    const btn = document.querySelector("#show-fact-btn");
    btn.addEventListener("click", function(event) {
        const facts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < facts.length; i++) {
            facts[i].style.visibility = "visible";
        }
    });
}
