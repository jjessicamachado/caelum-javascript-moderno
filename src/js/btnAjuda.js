const btnAjuda = document.querySelector('#btnAjuda')

btnAjuda.addEventListener('click', function() {
    // const ajudas = [{conteudo:'Texto', cor: '#ca99e8'}, {conteudo:'Texto', cor: '#83ebe4'}, {conteudo:'Texto', cor: '#768df5'}]

    // ajudas.forEach(function (ajuda) {
    //     adicionarCartao(ajuda)
    // })

        const xhr = new XMLHttpRequest();
        xhr.open('get', 'https://ceep.herokuapp.com/cartoes/instrucoes')
        xhr.responseType = "json"
        xhr.send()

        xhr.addEventListener('load', function() {
            const objeto = xhr.response
            const ajudas = objeto.instrucoes

            ajudas.forEach(function (ajuda) {
                adicionarCartao(ajuda)
            })
        })

})

btnAjuda.classList.remove('no-js');