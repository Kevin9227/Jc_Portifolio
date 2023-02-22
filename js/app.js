 var data = new Date();
 document.getElementById('data').innerHTML = data.getFullYear();
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


 function typeWriter(element) {
     let letters = element.innerHTML.split('');
     element.innerHTML = '';

     letters.forEach((letter, index, letters) => {
         setTimeout(() => element.innerHTML += letter, 250 * index)
     });
 }
 const text = document.querySelector('.nome');
 typeWriter(text);


 var data = new Date();
 document.getElementById('data').innerHTML = data.getFullYear();
 document.getElementsByTagName('body').styler.background = "red";
