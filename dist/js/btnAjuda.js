'use strict';

var btnAjuda = document.querySelector('#btnAjuda');

btnAjuda.addEventListener('click', function () {
    var ajudas = [{ conteudo: 'Texto', cor: '#ca99e8' }, { conteudo: 'Texto', cor: '#83ebe4' }, { conteudo: 'Texto', cor: '#768df5' }];

    ajudas.forEach(function (ajuda) {
        adicionarCartao(ajuda);
    });
});

btnAjuda.classList.remove('no-js');