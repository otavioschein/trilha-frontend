const ul = document.getElementById("pessoas");
const url = "https://firebasestorage.googleapis.com/v0/b/exemplo-json.appspot.com/o/json.json?alt=media&token=6bfc0a2a-f10d-4c67-a1c6-3ecbef90cdeb";

fetch(url)
    .then((resp) => {resp.json()})
    .then(function(data) {
        console.log(data)

        return data.map(function (pessoa) {
            let li = document.createElement('li');
            li.innerHTML = `${pessoa.nome} tem ${pessoa.username}`;
            ul.appendChild(li)
        })
    })
    .catch((error) => {
        console.log(error)
    })