
// funcion para que la fecha desaparesca

var checkbox = document.getElementById("solo-ida");

var fecha = document.getElementById("regreso");
var label = document.getElementById("label-regreso")









checkbox.addEventListener("click", function () {
  if (this.checked) {
    fecha.style.display = "none";

  } else {
    fecha.style.display = "block";
  }
});

checkbox.addEventListener("click", function () {
  if (this.checked) {
    label.style.display = "none";

  } else {
    label.style.display = "flex";
  }
});






// parte del js delos vuelos

desde.addEventListener('change', function() {

  const desde = document.getElementById('desde');
  const rdchina = document.getElementById('rdchina');
  const chinaRd = document.getElementById('chinaRd');
  const rdColombia = document.getElementById('rdColombia');
  const colombiaRd = document.getElementById('colombiaRd');
  const rdMexico = document.getElementById('rdMexico');
  const mexicoRd = document.getElementById('mexicoRd');
  const rdUsa = document.getElementById('rdUsa');
  const usaRd = document.getElementById('usaRd');
  const mexicoUsa = document.getElementById('mexicoUsa');
  const usaMexico = document.getElementById('usaMexico');
  const mexicoChina = document.getElementById('mexicoChina');
  const chinaMexico = document.getElementById('chinaMexico');
  const mexicoColombia = document.getElementById('mexicoColombia');
  const colombiaMexico = document.getElementById('colombiaMexico');
  const colombiaChina = document.getElementById('colombiaChina');
  const chinaColombia = document.getElementById('chinaColombia');
  const colombiaUsa = document.getElementById('colombiaUsa');
  const usaChina = document.getElementById('usaChina');
  const chinaUsa = document.getElementById('chinaUsa');


  if (desde.value === 'republicaDominicana') {
    rdchina.style.display = 'block';
    chinaRd.style.display = 'none';
    rdColombia.style.display = 'block';
    colombiaRd.style.display = 'none';
    rdMexico.style.display = 'block';
    mexicoRd.style.display = 'none';
    rdUsa.style.display = 'block';
    usaRd.style.display = 'none';
    mexicoUsa.style.display = 'none';
    usaMexico.style.display = 'none';
    chinaMexico.style.display = 'none';
    mexicoChina.style.display = 'none';
    mexicoColombia.style.display = 'none';
    colombiaMexico.style.display = 'none';
    colombiaChina.style.display = 'none';
    chinaColombia.style.display = 'none';
    colombiaUsa.style.display = 'none';
    usaChina.style.display = 'none';
    chinaUsa.style.display = 'none';



  }
  
  else if (desde.value === 'usa') {
    rdchina.style.display = 'none';
    chinaRd.style.display = 'none';
    rdColombia.style.display = 'none';
    colombiaRd.style.display = 'none';
    rdMexico.style.display = 'none';
    mexicoRd.style.display = 'none';
    rdUsa.style.display = 'none';
    usaRd.style.display = 'block';
    mexicoUsa.style.display = 'none';
    usaMexico.style.display = 'block';
    chinaMexico.style.display = 'none';
    mexicoChina.style.display = 'none';
    mexicoColombia.style.display = 'none';
    colombiaMexico.style.display = 'none';
    colombiaChina.style.display = 'none';
    chinaColombia.style.display = 'none';
    colombiaUsa.style.display = 'none';
    usaChina.style.display = 'block';
    chinaUsa.style.display = 'none';
  }
  
  
  else if (desde.value === 'colombia') {
    rdchina.style.display = 'none';
    chinaRd.style.display = 'none';
    rdColombia.style.display = 'none';
    colombiaRd.style.display = 'block';
    rdMexico.style.display = 'none';
    mexicoRd.style.display = 'none';
    rdUsa.style.display = 'none';
    usaRd.style.display = 'none';
    mexicoUsa.style.display = 'none';
    usaMexico.style.display = 'none';
    chinaMexico.style.display = 'none';
    mexicoChina.style.display = 'none';
    mexicoColombia.style.display = 'none';
    colombiaMexico.style.display = 'block';
    colombiaChina.style.display = 'block';
    chinaColombia.style.display = 'none';
    colombiaUsa.style.display = 'block';
    usaChina.style.display = 'none';
    chinaUsa.style.display = 'none';
  } 

  else if (desde.value === 'mexico') {
    rdchina.style.display = 'none';
    chinaRd.style.display = 'none';
    rdColombia.style.display = 'none';
    colombiaRd.style.display = 'none';
    rdMexico.style.display = 'none';
    mexicoRd.style.display = 'block';
    rdUsa.style.display = 'none';
    usaRd.style.display = 'none';
    mexicoUsa.style.display = 'block';
    usaMexico.style.display = 'none';
    chinaMexico.style.display = 'none';
    mexicoChina.style.display = 'block';
    mexicoColombia.style.display = 'block';
    colombiaMexico.style.display = 'none';
    colombiaChina.style.display = 'none';
    chinaColombia.style.display = 'none';
    colombiaUsa.style.display = 'none';
    usaChina.style.display = 'none';
    chinaUsa.style.display = 'none';

}

else if (desde.value === 'china') {
  rdchina.style.display = 'none';
  chinaRd.style.display = 'block';
  rdColombia.style.display = 'none';
  colombiaRd.style.display = 'none';
  rdMexico.style.display = 'none';
  mexicoRd.style.display = 'none';
  rdUsa.style.display = 'none';
  usaRd.style.display = 'none';
  mexicoUsa.style.display = 'none';
  usaMexico.style.display = 'none';
  chinaMexico.style.display = 'block';
  mexicoChina.style.display = 'none';
  mexicoColombia.style.display = 'none';
  colombiaMexico.style.display = 'none';
  colombiaChina.style.display = 'none';
  chinaColombia.style.display = 'block';
  colombiaUsa.style.display = 'none';
  usaChina.style.display = 'none';
  chinaUsa.style.display = 'block';

}
else{
  rdchina.style.display = 'none';
  chinaRd.style.display = 'none';
  rdColombia.style.display = 'none';
  colombiaRd.style.display = 'none';
  rdMexico.style.display = 'none';
  mexicoRd.style.display = 'none';
  rdUsa.style.display = 'none';
  usaRd.style.display = 'none';
  mexicoUsa.style.display = 'none';
  usaMexico.style.display = 'none';
  chinaMexico.style.display = 'none';
  mexicoChina.style.display = 'none';
  mexicoColombia.style.display = 'none';
  colombiaMexico.style.display = 'none';
  colombiaChina.style.display = 'none';
  chinaColombia.style.display = 'none';
  colombiaUsa.style.display = 'none';
  usaChina.style.display = 'none';
  chinaUsa.style.display = 'none';

}


});








