const cartao = document.querySelectorAll('.cartao');

for (let i = 0; i < cartao.length; i++) {
    cartao[i].addEventListener('focusin', function() {
        cartao[i].classList.add('cartao--focado'); }
    ) 
    cartao[i].addEventListener('focusout', function() {
        cartao[i].classList.remove('cartao--focado');
    })
}