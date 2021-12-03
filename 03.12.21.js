const { getFullName } = require("./lib")
const fs = require('fs')
const arr = {
    name:"John",
    lastname:"Doe",
    age: "42"
}


getFullName(arr)

fs.writeFile("./person.json", JSON.stringify(arr), () => {

})













//function getFullName({name, lastname}){
 //   console.log(obj.name + " " + obj.lastname)
//}

//getFullName(arr)

