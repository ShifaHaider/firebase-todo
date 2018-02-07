
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