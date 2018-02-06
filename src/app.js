
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