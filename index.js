var users = [
    {username:"burak",password:"1234"},
    {username:"tekin",password:"12345"}
]

var info = [
    {school:"Medipol", age:21,city:"Istanbul"},
    {school:"Nisantası", age:12,city:"Istanbul"},
    {school:"Gelisim", age:32,city:"Istanbul"}
]

var userName = prompt("Username : ")
var password = prompt("Password : ")

function Login(){
    if(userName == users[0].username && password == users[0].password 
        ||
        userName == users[1].username && password == users[1].password){
            console.log(info)
        }
    else{
        alert("Wrong userName or Password.")
    }
        
}
Login()