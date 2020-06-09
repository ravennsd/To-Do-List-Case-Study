function truevalidate(username, pwd, callback) {
    
    if (username == "" || pwd == "") {
        alert("Fields cannot be empty");
    }

    else if (username == "admin" && pwd == "12345") {
        callback();
    }
    
    else {
    alert("Username or password is incorrect");
    }
}
function validate() {

   let username = document.getElementById("username").value;
    let pwd = document.getElementById("pwd").value;

    truevalidate(username, pwd, function() {
        window.location.href= window.location.origin + "/to-do.html"
    })
    // windows.location.href = "to-do.html";
}

function toDo() {
    var xhttp = new XMLHttpRequest();
    // var theList="to-do.JSON";
    // console.log(theList);
    // xhttp.onload = function() {
    // console.log(xhttp.responseText);
    // var theList = JSON.parse(xhttp.responseText);
    // console.log(theList[0]);
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var apiList = JSON.parse(this.responseText);
            //        var theList=response .TODO;
            // console.log(theList);
            myFunction(apiList);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

function myFunction(myList) {

    var txt = "";


    for (var i in myList) {

        if (myList[i].completed == false) {
            //if completed==true {
            //checked disabled


            txt += "<label>" + myList[i].userId + "</label></br><label>" + myList[i].id +
             "</label></br><input class='title'name='titlenode[" + myList[i].title + "]' value='" + 
             myList[i].title + "'type='checkbox' unchecked/><label>" + myList[i].title + "</label>";
        }
        else{
            txt += "<label>" + myList[i].userId + "</label></br><label>" + myList[i].id + 
            "</label></br><input class='title'name='titlenode[" + myList[i].title + "]' value='" 
            + myList[i].title + "'type='checkbox' checked disabled/><label>" + myList[i].title + "</label>";
        }
    }
    document.getElementById("lists").innerHTML = txt;
}

// function checkForAlert() {
//     var checkThreshold = function(resolve, reject) {
//         if(values.length > 4) {
//             resolve();
//         } else {
//             reject();
//         }
//     }
//     return new Promise(checkThreshold)
// }
function checkForAlert(resolve, reject) {
    if(values.length > 4) {
        resolve();
    } else {
        reject();
    }
}

let values = []
function counter(e) {
    if(values.includes(e.target.value)) {
        let indexOf = values.indexOf(e.target.value)
        values.splice(indexOf, 1);
    } else {
        values.push(e.target.value)
    }
    new Promise(checkForAlert).then(() => {
        alert("5 Tasks have been completed");
        // console.log("success");
    }).catch(() => {
        // console.log("Failed");
    })
   
}