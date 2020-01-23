'use strict';

var mural = document.querySelector('.mural');

mural.addEventListener('click', function (e) {
    if (e.target.classList.contains('opcoesDoCartao-remove')) {
        var cartao = e.target.closest('.cartao');
        cartao.classList.add('cartao--some');

        cartao.addEventListener('transitionend', function () {
            cartao.remove();
        });
    }
});

mural.addEventListener('focusin', function (e) {
    var cartao = e.target.closest('.cartao');
    cartao.classList.add('cartao--focado');
});

mural.addEventListener('focusout', function (e) {
    var cartao = e.target.closest('.cartao');
    cartao.classList.remove('cartao--focado');
});

mural.addEventListener('change', function (e) {
    if (e.target.classList.contains('opcoesDoCartao-radioTipo')) {
        var cartao = e.target.closest('.cartao');
        cartao.style.backgroundColor = e.target.value;
    }
});

mural.addEventListener('keydown', function (e) {
    if (e.target.classList.contains('opcoesDoCartao-opcao') && e.key === 'Enter') {
        e.target.click();
    }
});