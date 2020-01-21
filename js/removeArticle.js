(function () {
    const btns = document.querySelectorAll('.opcoesDoCartao-remove');

    for (let i = 0; i < 3; i++) {
        btns[i].addEventListener('click', removeCartao);

        function removeCartao() {
            const cartao = btns[i].closest('.cartao');
            cartao.classList.add('cartao--some');

            cartao.addEventListener('transitionend', function () {
                cartao.remove();
            })
        }
    }

})();
