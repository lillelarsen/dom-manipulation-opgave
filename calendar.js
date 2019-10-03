let month = new Date();
let calMonth = month.getMonth();
let day = new Date();
let calDay = day.getDate();
let doors = document.querySelectorAll('li');

function tjeckMonth() {
    //For at teste, kan man ændre nedestående if-statement til den pågældende måned
    if (calMonth == 10) {
        calendar();
    } else {
        document.querySelector('.errorMessage').innerHTML = 'Det er ikke December endnu!!';
    }
}

function calendar() {
    //Open and close calendar doors
    function openDoor(event) {
        console.log(this);
        if (this.dataset.open === 'false' ){
            this.dataset.open = 'true'; 
            this.classList.add('open');
        } else {
            this.dataset.open = 'false';
            this.classList.remove('open');
        }
        
    };

    //Events 
    // when you click on a door it calls for openDoor handling
    for (let i = 0; i < calDay; i++ ){
        doors[i].addEventListener('click', openDoor);
    }

    // Animation for todays door
    for (let i = 0; i < doors.length; i++ ){
        if (doors[i].dataset.date = calDay) {
            doors[i].classList.add('today');
        } 
    }

    // Message for christmas 24th
    for (let i = 0; i < doors.length; i++ ){
        if (doors[i].dataset.date == 24) {
            
        } 
    }
}

for (let i = 0; i < doors.length; i++ ){
    doors[i].addEventListener('click', tjeckMonth);
}