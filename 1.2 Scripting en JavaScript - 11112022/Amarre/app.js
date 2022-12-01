// Tenemos que pensar que tenemos que hacer

function moverPosicionRamdom(elm){
    // cambiamos la posicion de relative a absolute
    elm.style.position = 'absolute';
    // Multiplicamos numeros aleatorios por la diferencia del tamaño de la ventana menos
    // la altura o el ancho y luego concatenamos en con px
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';

}

// pobtengo los botones

let btnSi = document.getElementById("btn_si");
let btnNo =document.getElementById("btn_no");
let divModoSex = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter',function(e) {moverPosicionRamdom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabia que dirias que si. Casemonos ya y tengamos hijos. TE AMO!!!! <3');
    
    divModoSex.style.display = 'block';
    const cancion = new Audio('img\\modo_hot.mp3')
    cancion.play();
})