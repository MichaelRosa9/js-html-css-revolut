$(function(){

  //funzione hover di jquery ull'elemento .drop-click
  $('.drop-click').mouseenter(function(){
    //tolgo la classe .active a tutti gli elementi con classe .dropdown-menu.active
    $('.dropdown-menu.active').removeClass('active');
    //aggiungo la classe .active all'elemento puntato dal mouse
    $(this).children('.dropdown-menu').addClass('active');
  })
  
  //funzione quando clicco l'elemento .drop-click
  $('.drop-click').click(function(){
    //l'elemento cliccato aggiunge o rimiove la classe .active
    $(this).children('.dropdown-menu').toggleClass('active');
  })
});