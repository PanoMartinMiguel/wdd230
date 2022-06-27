
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

const list = document.querySelector('ul');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    if (input.value.length == 0 ) {
        alert("Text field is blank");
    } else {
        let favchap = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.innerHTML = favchap;
        listItem.appendChild(listBtn);
        listBtn.innerHTML = '❌';
        list.appendChild(listItem);

        listBtn.addEventListener('click', function() {
            list.removeChild(listItem);
        });
        input.focus('');
    }
});
