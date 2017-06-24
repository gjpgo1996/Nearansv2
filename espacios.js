var modal=document.getElementById('space');
var fotos=document.getElementsByClassName('images')[0];
var images=document.getElementsByClassName('fotos')[0];
var span = document.getElementById("close");
var body=document.getElementsByTagName('body')[0];
var btclose=document.getElementsByClassName('js-btclose')[0];

//images.onclick=function captura(e){
images.addEventListener('click',function (e){
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.nextElementSibling);
  var parrafo=e.target.nextElementSibling;
  console.log(e.target.className);
  // colocar condicional para solo seleccionar la clase icono
  if(e.target.className == "paisaje"){
    // console.log(images);
    var modalImg = document.getElementById("img01");
    body.style.overflow="hidden";
    modal.style.display="block";
    modalImg.src = "img/"+e.target.alt+".jpg";
    $('h2').text(e.target.alt);
    $('.p1').text($(parrafo).text());
    }
});

fotos.addEventListener('click',function (e){
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.nextElementSibling);
  var parrafo=e.target.nextElementSibling;
  console.log(e.target.className);
  // colocar condicional para solo seleccionar la clase icono
  if(e.target.className == "renta"){
    // console.log(images);
    var modalImg = document.getElementById("img01");
    body.style.overflow="hidden";
    modal.style.display="block";
    modalImg.src = "img/"+e.target.alt+".jpg";
    $('h2').text(e.target.alt);
    $('.p1').text($(parrafo).text());
    }
});

function cerrar (event){
  event.preventDefault();
  // console.log(event.target);
    modal.style.display="none";
    body.style.overflow="visible";
  }

span.addEventListener('click',cerrar);
btclose.addEventListener('click',cerrar);
