var users = [
    { username: "burak", password: "1234" },
    { username: "tekin", password: "12345" }
]

var info = [
    { school: "Medipol", age: 21 },
    { school: "Nisantası", age: 12 },
    { school: "Gelisim", age: 32 }
]

var userName = prompt("Username : ")
var password = prompt("Password : ")

function userExist(){
    for(i=0; i<users.length;i++){
        if(users[i].username == userName && users[i].password == password)
        console.log(info);
    }
    return alert("Wrong userName or Password.")
}

// function Login() {
//     if (userName == users[0].username && password == users[0].password
//         ||
//         userName == users[1].username && password == users[1].password) {
//         console.log(info)
//     }
//     else {
//         alert("Wrong userName or Password.")
//     }  

// }
userExist() 