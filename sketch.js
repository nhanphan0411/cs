document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasExample');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("OpenMenu").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  });


   // Scroll to anchor and open accordion panel/ot working yet
   document.querySelectorAll
   ('a[data-bs-toggle="collapse"]').forEach(function (link) {
       link.addEventListener('click', function (event) {
           event.preventDefault();
           let target = 
               document.querySelector(this.getAttribute('href'));
           let accordion = 
               document.querySelector(this.getAttribute('data-bs-target'));

           $('html, body').animate({
               scrollTop: $(target).offset().top
           }, 500);

           $(accordion).collapse('show');
       });
   });

// click fullscreen
let images = document.querySelectorAll('.fs');

for (let i = 0; i < images.length; i++) {
    images[i].onmousedown = function() {
        if(images[i].fullscreenElement){ 
           images[i].exitFullscreen(); 
         } else { 
           images[i].requestFullscreen();
         } 
    }
}
