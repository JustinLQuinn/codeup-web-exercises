(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */


    console.log(planets.unshift("The Sun"));
    console.log(planets);

    console.log(planets.push("Pluto"));
    console.log(planets);

    console.log(planets.shift());
    console.log(planets);

    console.log(planets.pop());
    console.log(planets);

    var indexEarth = planets.indexOf('Earth');
    console.log(indexEarth);

    console.log(planets.reverse());
    console.log(planets);

    console.log(planets.sort());
    console.log(planets);

    indexEarth = planets.indexOf('Earth')
    console.log(indexEarth);

    indexEarth = planets.lastIndexOf('Earth')
    console.log(indexEarth);

})();
