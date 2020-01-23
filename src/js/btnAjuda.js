const btnAjuda = document.querySelector('#btnAjuda')

btnAjuda.addEventListener('click', function () {
    // const ajudas = [{conteudo:'Texto', cor: '#ca99e8'}, {conteudo:'Texto', cor: '#83ebe4'}, {conteudo:'Texto', cor: '#768df5'}]

    // ajudas.forEach(function (ajuda) {
    //     adicionarCartao(ajuda)
    // })


    //MODO DO LIVRO DE ABRIR REQUISIÇAO 
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://ceep.herokuapp.com/cartoes/instrucoes')
    xhr.responseType = "json"

    xhr.send()

    xhr.addEventListener('load', function () {
        const objeto = xhr.response
        const ajudas = objeto.instrucoes

        ajudas.forEach(function (ajuda) {
            adicionarCartao(ajuda)
        })
    })
})


//ALTERNATIVA MODO FETCH


// ************** Utilizando Fetch API **************
// fetch('https://ceep.herokuapp.com/cartoes/instrucoes')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         const ajudas = response.instrucoes
//         ajudas.forEach(function (ajuda) {
//             adicionarCartao(ajuda);
//         })
//     })

//     .catch(erro => console.log('Algo errado: ' + erro));

// ************** Utilizando Fetch API com arrow function **************
// fetch('https://ceep.herokuapp.com/cartoes/instrucoes')
//     .then(response => response.json()) // return implicito.
//     .then(response => {
//         const ajudas = response.instrucoes;

//         ajudas.forEach(ajuda => adicionarCartao(ajuda));
//     })
//     .catch(erro => console.log('Algo errado: ' + erro));  


btnAjuda.classList.remove('no-js');