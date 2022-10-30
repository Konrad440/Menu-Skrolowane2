
const txt = document.querySelector('div.info');

function changeText(){

const wielkoscSkrola = window.scrollY;

const wysokoscSekcji1 = document.querySelector('.sekcja1').clientHeight;
const wysokoscSekcji2 = document.querySelector('.sekcja2').clientHeight;
const wysokoscSekcji3 = document.querySelector('.sekcja3').clientHeight;
const wysokoscSekcji4 = document.querySelector('.sekcja4').clientHeight;

// console.log(wysokoscSekcji3);

const odlegloscOdPoczatkuSekcji1 = document.querySelector('.sekcja1').offsetTop;
const odlegloscOdPoczatkuSekcji2 = document.querySelector('.sekcja2').offsetTop;
const odlegloscOdPoczatkuSekcji3 = document.querySelector('.sekcja3').offsetTop;
const odlegloscOdPoczatkuSekcji4 = document.querySelector('.sekcja4').offsetTop;

if (wielkoscSkrola < wysokoscSekcji1){
    txt.textContent = "Sekcja 1";
}
else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2){
    txt.textContent = "Sekcja 2";
}
else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3){
    txt.textContent = "Sekcja 3";
}
else {
    txt.textContent = "Sekcja 4";
}

}

window.addEventListener('scroll',changeText);


