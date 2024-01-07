//Importing module using the 'require' GLOBAL variable
const names = require('./names.js')
const sayHi = require('./greet.js')
const data = require('./alternative_exporting.js')
require('./add2nums.js')

console.log(data)

sayHi('Drishti')
sayHi(names.john)
sayHi(names.peter)