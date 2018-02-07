
var db = firebase.firestore();

getTodos();

function addTodo(){
    var inp = document.getElementById('inp');
    console.log(inp.value);
    db.collection('todos').add({
        time : Date.now(),
        todo : inp.value
    });
    inp.value = '';
}
function getTodos(){
    var todo = document.getElementById('todos');
    db.collection('todos').get().then(function(docCollection){
        console.log(docCollection);
        docCollection.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.todo + ' ' + new Date(d.time).toLocaleString();
            todo.appendChild(li);

            console.log(doc.id);
        })
    })
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
getFruits();
function getFruits(){
    var fruit = document.getElementById('fruit');
    db.collection('fruits').get().then(function(collectFruits){
        console.log(collectFruits);
        collectFruits.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.fruitName + ' ' + new Date(d.time).toLocaleString();
            fruit.appendChild(li);
        })
    })
}
function addCountry(){
    var conInp = document.getElementById('conInp');
    db.collection('countries').add({
        countryName : conInp.value,
        time : Date.now()
    });
    conInp.value = '';
}
getCountry();
function getCountry(){
    var country = document.getElementById('country');
    db.collection('countries').get().then(function(collectConName){
        console.log(collectConName);
        collectConName.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.countryName + ' ' + new Date(d.time).toLocaleString();
            country.appendChild(li);
        })
    })
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
getCities();
function getCities(){
    var city = document.getElementById('city');
    db.collection('cities').get().then(function(collectCityName){
        console.log(collectCityName);
        collectCityName.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.cityName + ' ' + new Date(d.time).toLocaleString();
            city.appendChild(li);
        })
    })
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
getFlower();
function getFlower(){
    var flower = document.getElementById('flower');
    db.collection('flowers').get().then(function(collectFlower){
        console.log(collectFlower);
        collectFlower.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.flowerName + ' ' + new Date(d.time).toLocaleString();
            flower.appendChild(li);
        })
    })
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
getVegetable();
function getVegetable(){
    var veg = document.getElementById('veg');
    db.collection('vegetables').get().then(function(collectVegetable){
        console.log(collectVegetable);
        collectVegetable.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.vegetableName + ' ' + new Date(d.time).toLocaleString();
            veg.appendChild(li);
        })
    })
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
getPhones();
function getPhones(){
    var phones = document.getElementById('phone');
    db.collection('Smart phones').get().then(function(collectPhones){
        console.log(collectPhones);
        collectPhones.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.phonesName + ' ' + new Date(d.time).toLocaleString();
            phones.appendChild(li);
        })
    })
}
function addNames(){
    var nameInp = document.getElementById('nameInp');
    console.log(nameInp.value);
    db.collection('Name').add({
        names: nameInp.value,
        time : Date.now()
    });
    nameInp.value = '';
}
getNames();
function getNames(){
    var names = document.getElementById('name');
    db.collection('Name').get().then(function(collectNames){
        console.log(collectNames);
        collectNames.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.names + ' ' + new Date(d.time).toLocaleString();
            names.appendChild(li);
        })
    })
}
function addBooks(){
    var bookInp = document.getElementById('bookInp');
    console.log(bookInp.value);
    db.collection('Books').add({
        books : bookInp.value,
        time : Date.now()
    });
    bookInp.value = '';
}
getBooks();
function getBooks(){
    var books = document.getElementById('book');
    db.collection('Books').get().then(function(collectBooks){
        console.log(collectBooks);
        collectBooks.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.books + ' ' + new Date(d.time).toLocaleString();
            books.appendChild(li);
        })
    })
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
getColours();
function getColours(){
    var colours = document.getElementById('colour');
    db.collection('colours').get().then(function(collectColours){
        console.log(collectColours);
        collectColours.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.colourName + ' ' + new Date(d.time).toLocaleString();
            colours.appendChild(li);
        })
    })
}
function addGames(){
    var gameInp = document.getElementById('gameInp');
    console.log(gameInp.value);
    db.collection('games').add({
        favGameName : gameInp.value,
        time : Date.now()
    });
    gameInp.value = '';
}
getGames();
function getGames(){
    var games = document.getElementById('game');
    db.collection('games').get().then(function(collectGames){
        console.log(collectGames);
        collectGames.forEach(function(doc){
            var d = doc.data();
            var li = document.createElement('li');
            li.innerHTML = d.favGameName + ' ' + new Date(d.time).toLocaleString();
            games.appendChild(li);
        })
    })
}