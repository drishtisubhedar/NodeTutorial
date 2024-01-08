const path = require('path')

//Shows the seperator of the the current platform
const seperator = path.sep
console.log(seperator)

//another way of writing
console.log(path.sep)

//to join particular files and folders and thier path
const filepath = path.join('/folder','subfolder','text.txt')
console.log(filepath)

//to know the last portion of the recent folder
const base = path.basename(filepath)
console.log(base)