 var data = new Date();
 //document.getElementById('data').innerHTML = data.getFullYear();
 var texto = 'Joaquim de Campos ';
 /*   var txt =document.getElementById('nome');
   var speed =550;
   var cont = 0;
   function typeWriter(){
     if(cont < texto.length){
       txt.textContent += texto.charAt(cont);
       cont++;
       setTimeout(typeWriter,speed);
     }else{
       txt.textContent='';
       cont =0;
       typeWriter();
     }
   }
   typeWriter(); */

 function navega() {
     var xbarra = window.scrollY
     var xmargin = document.getElementById("pro1")
     var xtxt = document.getElementById("projtxt")

     if (xbarra > 1000) {

         //window.scrollTo(0, 0)
         xmargin.style.marginLeft = '0'
         xmargin.style.marginRight = '0'
         console.log(xbarra)

     } else {
         xmargin.style.marginLeft = '-60%'
         xmargin.style.marginRight = '-60%'
         console.log(xbarra)
     }
 }


 function typeWriter(element) {
     let letters = element.innerHTML.split('');
     element.innerHTML = '';

     letters.forEach((letter, index, letters) => {
         setTimeout(() => element.innerHTML += letter, 250 * index)
     });
 }
 const text = document.querySelector('.nome');
 // typeWriter(texto);


 //var data = new Date();
 // document.getElementById('data').innerHTML = data.getFullYear();
 //document.getElementsByTagName('body').styler.background = "red";

 // FUNCIONALIDADES BASICAS A APLICAR

 //EFEITO ESCROLL

 // Encontra todos os links de âncora na página
 const links = document.querySelectorAll('a[href^="#"]');

 // Adiciona um evento de clique em cada link de âncora
 links.forEach(link => {
     link.addEventListener('click', function (e) {
         // Impede que o comportamento padrão do link de âncora aconteça
         e.preventDefault();

         // Obtém o destino do link de âncora
         const target = document.querySelector(this.getAttribute('href'));

         // Obtém a posição de rolagem vertical do destino
         const targetPosition = target.offsetTop;

         // Define a posição de rolagem vertical da página com animação
         window.scrollTo({
             top: targetPosition,
             behavior: 'smooth'
         });
     });
 });
