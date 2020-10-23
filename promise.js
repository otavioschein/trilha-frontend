// const { resolve } = require("path");

// const p = new Promise((resolve, reject) => {
//     if(Math.random() > 0.5) 
//         resolve('yay')
//         reject('no')
// })

// p  
//     .then(function acao1 (res) {console.log(`${res} da acao 1`); return res;})
//     .then(function acao2 (res) {console.log(`${res} da acao 2`); return res;})
//     .then(function acao3 (res) {console.log(`${res} da acao 3`); return res;})
//     .catch(function erro (rej) {console.log(rej);})

    //////

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if(a == 2) {
//         resolve("Success")
//     } else {
//         reject("Failed")
//     }
// })

// p.then((message) => {
//     console.log(`This is in the then ${message}`)
// }).catch((err) => {
//     console.log(`This is in the catch ${err}`)
// })


/////

const betterDeveloper = 'Inter';

function whoIsBetterTeam() {

    return new Promise((resolve, reject) => {
        if (betterDeveloper != 'Inter') {
            reject({
                name: "This is wrong!",
                message: betterDeveloper  + "? Really?"
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: "That's right!"
            })
        }
    })
}

whoIsBetterTeam()
    .then((result) => {
        console.log(result.name + "? Yeah! " + result.message)
    })
    .catch((error) => {
        console.log(error.name + ' ' + error.message)

    })