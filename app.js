"use strict"

function convertTemp(temp, type) {
    if (type === "C") {
        console.log((temp - 32) / (9 / 5));
    } else if (type === "F") {
        console.log(temp * 9 / 5 + 32);
    } else {
    	console.log("uh oh");
    }
}

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(100, "F");
convertTemp(-40, "F");


