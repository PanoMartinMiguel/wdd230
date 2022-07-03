const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets( ) {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        //console.log(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildProphetCards(data) {
    let nonUtah = data.prophets.filter(p => p.birthplace !== "Utah");
    nonUtah.forEach(prophet => {

        let card = document.createElemennt("section");
        let h2 = document.createElemennt("h2");
        let p = document.createElemennt("p");
        let img = document.createElemennt("img");

        let fullName = `${prophet.name} ${prophet.lastname}`;

        h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}</span>`;
        p.innerHTML = `Location of Birth: <strong>${prophet.birthplace}</strong>`;
        Img.setAttribute("src", prophet.imageurl);
        Img.setAttribute("alt", `Picture of president ${fullName}`);
        Img.setAttribute("loading", "lazy");

        card.append(h2);
        card.append(p);
        card.append(img);

        cards.append(card);
    });
}

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