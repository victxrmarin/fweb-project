function validaBusca() {
    if(document.querySelector('#q').value == '') {
        alert('Não podia ter deixado em branco a busca!')
        return false
    }
}

var banners = ["./assets/dior.jpg", "./assets/pierre_berge.jpg"];
var bannerAtual = 0;
function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.getElementById("image-display").src = banners[bannerAtual];
}
let timer = setInterval(trocaBanner, 2000);

document.querySelector('#form-busca').onsubmit = validaBusca