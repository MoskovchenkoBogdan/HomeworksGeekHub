$(document).ready(function(){
  var timerId = setInterval(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage =$('.img').eq(nextImageIndex);
        currentImage.removeClass('curry');
        if(nextImageIndex == ($('.img:last').index()+1)){
            $('.img').eq(0).addClass('curry');
        } else {
            nextImage.addClass('curry');
        }
    }, 3000);
});