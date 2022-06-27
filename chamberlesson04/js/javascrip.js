window.onload = get_year();
window.onload = get_date();

function get_date() {
    var LastModif = new Date(document.lastModified);
    console.log(LastModif);
    document.getElementById("date").innerHTML = LastModif;
}

function get_year() {
    var date =  new Date().getFullYear();
    console.log(date);
    document.querySelector("#year").innerHTML = date;
}