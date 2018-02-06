
var db = firebase.firestore();
function addTodo(){
    var inp = document.getElementById('inp');
    console.log(inp.value);
    db.collection('todos').add({
        time : Date.now(),
        todo : inp.value
    });
    inp.value = '';
}
function addFruits(){
    var fruitInp = document.getElementById('fruitInp');
    console.log(fruitInp.value);
    db.collection('fruits').add({
        fruitName: fruitInp.value,
        time: Date.now()
    });
    fruitInp.value = '';
}
function addCountry(){
    var conInp = document.getElementById('conInp');
    db.collection('countries').add({
        countryName : conInp.value,
        time : Date.now()
    });
    conInp.value = '';
}
function addFlowers(){
    var flowInp = document.getElementById('flowInp');
    console.log(flowInp.value);
    db.collection('flowers').add({
        flowerName : flowInp.value,
        time : Date.now()
    });
    flowInp.value = '';
}
function addCities(){
    var cityInp = document.getElementById('cityInp');
    console.log(cityInp.value);
    db.collection('cities').add({
        cityName : cityInp.value,
        time : Date.now()
    });
    cityInp.value = '';
}
function addVegetables(){
    var vegInp = document.getElementById('vegInp');
    console.log(vegInp.value);
    db.collection('vegetables').add({
        vegetableName : vegInp.value,
        time : Date.now()
    });
    vegInp.value = '';
}
function addPhones(){
    var phoneInp = document.getElementById('phoneInp');
    console.log(phoneInp.value);
    db.collection('Smart phones').add({
        phonesName : phoneInp.value,
        time : Date.now()
    });
    phoneInp.value = '';
}
function addNames(){
    var nameInp = document.getElementById('nameInp');
    console.log(nameInp.value);
    db.collection('Name').add({
        namesName : nameInp.value,
        time : Date.now()
    });
    nameInp.value = '';
}
function addBooks(){
    var bookInp = document.getElementById('bookInp');
    console.log(bookInp.value);
    db.collection('Books').add({
        names : bookInp.value,
        time : Date.now()
    });
    bookInp.value = '';
}
function addColours(){
    var colourInp = document.getElementById('colourInp');
    console.log(colourInp.value);
    db.collection('colours').add({
        colourName : colourInp.value,
        time : Date.now()
    });
    colourInp.value = '';
}
function addGames(){
    var gameInp = document.getElementById('gameInp');
    console.log(gameInp.value);
    db.collection('games').add({
        FavGameName : gameInp.value,
        time : Date.now()
    });
    gameInp.value = '';
}