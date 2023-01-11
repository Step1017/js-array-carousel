//Prendo la slidebox
const slideBox = document.getElementById('slide-box');

//Creo array con percorsi img
const imgList = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp'];

//Creo ciclo con numero slide uguale a numero img
for (let i = 0; i < imgList.length; i++) {

    slideBox.innerHTML += `<div class="slide">
                             <img src="${imgList[i]}">
                           </div>`;
}

//Rendo visibile la prima slide con la classe current
document.querySelector('#slide-box .slide').classList.add('current');

//Creo una variabile per indicare la slide corrente e renderla visibile 
let current = 0;

//Creo array con slide
const slideList = document.getElementsByClassName('slide');
console.log(slideList);

//Prendo i bottoni
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

//Quando clicco sul bottone di destra:
rightButton.addEventListener ('click',
	function() {
        
        //Rimuovo la classe current dalla slide corrente
        slideList[current].classList.remove('current');

        //Incremento di 1 la variabile current
        current++;

        //Assegno la classe current alla slide seguente
        slideList[current].classList.add('current');

        //Tolgo la classe hidden dal bottone di sinistra rendendolo visibile
        leftButton.classList.remove('hidden');

        //Se sono sull'ultima slide:
        if (current == slideList.length - 1) {

            //Il bottone di destra scompare
            rightButton.classList.add('hidden');

        }
	}
)

//Quando clicco sul bottone di sinistra:
leftButton.addEventListener ('click',
	function() {
        
        //Rimuovo la classe current dalla slide corrente
        slideList[current].classList.remove('current');

        //Decremento di 1 la variabile current
        current--;

        //Assegno la classe current alla slide precedente
        slideList[current].classList.add('current');

        //Tolgo la classe hidden dal bottone di sinistra rendendolo visibile
        rightButton.classList.remove('hidden');

        //Se sono sulla prima slide:
        if (current == 0) {

            //Il bottone di sinistra scompare
            leftButton.classList.add('hidden');

        }
	}
)