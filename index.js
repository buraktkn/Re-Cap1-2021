var users = [
    {username:"burak",password:"1234"},
    {username:"tekin",password:"12345"}
]

var info = [
    {school:"Medipol", age:21},
    {school:"Nisantası", age:12},
    {school:"Gelisim", age:32}
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

// for(i=1; i<=10; i++){
//     console.log(i)
// }

var citys = ["Diyarbakır", "Batman", "İstanbul", "İzmir"]
// var i=0;
// while (i<city.length){
//     console.log(city[i])
//     i++;
// }
citys.forEach(function(city){
    console.log(city)
})