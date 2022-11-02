// кнопка страницу наверх 

jQuery(document).ready(function() {
    var btn = $('#buttontothetop');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 100) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });
      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '100');
      });
 



  let $downbutton = document.querySelector('#downbutton');
  $downbutton.onclick = function (e) {
    e.preventDefault();
    downbutton.scrollIntoView(top)
  };
});