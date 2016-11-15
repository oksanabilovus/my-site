$(document).ready(function() {
 
  $("#carousel").fotoCarousel({
 
      autoPlay: 3000, 
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
/*var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    var width = 498; 
    var count = 1;

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; 

    carousel.querySelector('.prev').onclick = function() {
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };*/