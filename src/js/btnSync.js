const btnSync = $('#btnSync')

btnSync.on('click', function() {
    btnSync.addClass('botaoSync--esperando')
    btnSync.removeClass('botaoSync--sincronizado')

    //configurando pra enviar pro servidor
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar')
    xhr.setRequestHeader('content-type', 'application/json')

    let cartoes = $('.cartao').toArray() //pegamos todos os cartoes e colocamos em um array, mas estao todos em HTML
        cartoes = cartoes.map(function (cartao) { //indo mais a fundo no HTML pra pegar o conteúdo e a cor
            return {
                conteudo: cartao.querySelector('.cartao-conteudo').textContent, //pega o conteúdo dentro da tag P
                cor: getComputedStyle(cartao).getPropertyValue('background-color') //pega a cor selecionada no MOMENTO
            }
        })

        const dados = {usuario: 'Jessica',
        cartoes } //passando pra um array o usuário e o array dos cartoes
        
        xhr.send(JSON.stringify(dados)) //envia pro servidor os dados em forma de string (sempre envia em forma de string)

        xhr.addEventListener('load', function() {
            const response = JSON.parse(xhr.response) //converte os dados em JSON de novo pra poder contar
            alert(`${response.quantidade} cartoes salvos em ${response.usuario}`)

            btnSync.removeClass('botaoSync--esperando')
            btnSync.addClass('botaoSync--sincronizado')
        })

        xhr.addEventListener('error', function() {
            btnSync.removeClass('botaoSync--esperando')
            btnSync.addClass('botaoSync--deuRuim')
        })
})

btnSync.removeClass('no-js')
