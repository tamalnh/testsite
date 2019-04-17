$( document ).ready(function() {

    $("#js-rotating").Morphext({
        animation: "zoomIn",
        separator: "|",
        speed: 2000 
        });

    var Scrollbar = window.Scrollbar;
  
    Scrollbar.init(document.querySelector('.project-content'));




   setInterval(function(){
       $('.cv-button').toggleClass('animated shake')
       
   }, 3000)

});