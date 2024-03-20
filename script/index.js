function validaBusca() {
    if(document.querySelector('#q').value == '') {
        document.querySelector('')
        alert('Não podia ter deixado em branco a busca!')
        return false
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca()