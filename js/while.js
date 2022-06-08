
let i = 1
while (i < 65536){
    i=(i * 2);
    console.log(i);
}

function sellOut() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    var customer = 0;
    do {
        customer++;
        let soldCones = Math.floor(Math.random() * 5) + 1;
        console.log("Customer wanted " + soldCones + " cone(s). I have " + allCones + " cones remaining.");
        if (soldCones > allCones) {
            console.log("Sorry I do not have enough cones remaining.");
        } else {
            allCones -= soldCones;

        }

    } while (allCones > 0);
    console.log("I have sold all of my product!!!");
}
sellOut()

