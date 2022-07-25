// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";

// const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

const imagePaths = [
    "assets/jalopy1.jpeg",
    "assets/jalopy2.jpeg",
    "assets/jalopy3.jpeg",
    "assets/Special-1.jpeg",
    //Picture: Special-1 got from: https://www.motorious.com/articles/features-3/chitty-chitty-bang-bang-car//
    "assets/jalopy4.jpeg",
    "assets/jalopy5.jpeg"
]
let currentImageIndex = 0;
export default function homeHTMLFunction(props) {
    return `
        <header class="main-header">
            <h1>Hello Jalopy!</h1>
        </header>
        <main>
            <div class="container container1-main">
                <img id="img1" class="homeimg" src="assets/jalopy1.jpeg">
            </div>
            <div>
                <p>
                    Hello to my Jalopy application!
                </p>    
            </div>
        </main>
    `;
}

export function homeJSFunction() {
    // const button = document.querySelector(".changeimg");
    dummyfunction();
    // button.addEventListener("click",  dummyfunction);
}
    function dummyfunction(){
        const img = document.querySelector("#img1");
        img.setAttribute("src", imagePaths[currentImageIndex]);
        currentImageIndex++;
        if (currentImageIndex === 6) {
            currentImageIndex = 0;
        }
    }