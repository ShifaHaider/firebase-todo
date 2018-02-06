
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