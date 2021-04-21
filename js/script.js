$(function(){

  //funzione dove cliccando l'elemento html con classe .drop-click aggiungo o rimuovo la classe .active all'elemento html con classe .dropdown-menu
  $('.drop-click').on('click',function(){
    var index = $(this).index();
    $('.drop-click').find('.dropdown-menu.active').removeClass('active');
    $('.dropdown-menu').eq(index).toggle('active');
  });
  
});