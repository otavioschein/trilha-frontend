const fs = require('fs')

console.log(1)

fs.readFile("./file.txt", (err, content) => {
    console.log(err, String(content))
})

// function callback(err, content) {
//     console.log(err, content)
// }

// fs.readFile("./file.txt", callback)

console.log(2)
console.log(3)

