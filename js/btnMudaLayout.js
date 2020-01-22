const btn = document.querySelector('#btnMudaLayout');
const muda = document.querySelector('.mural');

function mudaTexto() {
    if(btn.textContent == 'Linhas') {
        btn.textContent = 'Blocos';
    } else {
        btn.textContent = 'Linhas';
    }
}

function mudaLayout() {
    if(muda.classList.contains('mural--linha')) {
        muda.classList.remove('mural--linha');
    } else {
        muda.classList.add('mural--linha');
    }
}

function mudaLayoutToggle() {
    muda.classList.toggle('mural--linha');
}

btn.addEventListener('click', mudaTexto);
btn.addEventListener('click', mudaLayout);
btn.classList.remove('no-js');
muda.classList.remove('no-js');
