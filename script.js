
 /* menu part */

 const list = document.querySelectorAll('.list');
 function activelink(){
     list.forEach((item) => 
     item.classList.remove('active'));
     this.classList.add('active')
 }

 list.forEach((item) => 
 item.addEventListener('click',activelink));


 




 /* graphic design project part */
 let nextG = document.querySelector('.next-gr');
 let prevG = document.querySelector('.prev-gr');
 let sliderG = document.querySelector('.slider-gr');


 nextG.addEventListener('click', function(){
     let slidesG = document.querySelectorAll('.slides-gr');
     sliderG.appendChild(slidesG[0]);
 })

 prevG.addEventListener('click', function(){
     let slidesG = document.querySelectorAll('.slides-gr');
     sliderG.prepend(slidesG[16]);
 })

