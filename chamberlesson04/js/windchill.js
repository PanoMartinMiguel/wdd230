window.onload = main();

function main() {
    console.log("start");
    let t = parseFloat(document.querySelector("#t").textContent);
    let s = parseFloat(document.querySelector("#s").textContent);
    let windchill = "";

    if (t<= 50 && s > 3) {
        console.log("True");
        windchill = calc_windchill(t,s);
        windchill = `${windchill}&#176;F`;
    } else {
        console.log("False");
        windchill = "N/A";
        document.getElementById("w").innerHTML = windchill;
    }
}


function calc_windchill(t,s) {
    value = Math.pow(s,0.16);
    windchill = Math.round(35.74 + 0.6215 *t - 35.75* value + 0.4275* t* value);
    document.getElementById("w").innerHTML = `${windchill}&#176;F`;
    console.log(windchill);
}