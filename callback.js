// let salarioBruto = 3000;
// let salarioLiquido;

// getSalario(salarioBruto, (resultado) => {
//     salarioLiquido = resultado;
//     console.log(`O salário líquido é ${salarioLiquido}.`);
// })

// function getSalario(salarioBruto, callback) {
//     let liquido = 0;

//     const inss = salarioBruto * 0.11;
//     const vr = salarioBruto * 0.05;
//     const vt = salarioBruto * 0.06;
//     const fgts = salarioBruto * 0.15;
//     const descontos = inss + vr + vt + fgts;
//     liquido = salarioBruto - descontos;
    
//     return callback(liquido);
// }


////

const betterDeveloper = 'Inter';

function whoIsBetterTeam(callback, errorCallback) {
    if (betterDeveloper != 'Inter') {
        errorCallback({
            name: "This is wrong!",
            message: betterDeveloper  + "? Really?"
        })
    } else {
        callback({
            name: betterDeveloper,
            message: "That's right!"
        })
    }
}

whoIsBetterTeam((result) => {
    console.log(result.name + "? Yeah! " + result.message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})