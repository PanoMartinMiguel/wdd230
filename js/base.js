let daynames = [ 
    "monday",
    "tuesday",
    "wednesday",
    "Thursday",
    "friday",
    "saturday"
];

let months = [
    "January",
    "february",
    "March",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];

let d = new Date ();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + "," + monthName + " " + d.getDate() + "," +
year;

document.getElementById("Last updated").textCotent = fulldate;

try{
    let options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    };

document.getElementById(
    "Last updated2"
).textCotent = new Date().toLocaleDateString("en-US",options);
} catch (e) {
    alert("Error with code or your browser does not  support Locale")
}