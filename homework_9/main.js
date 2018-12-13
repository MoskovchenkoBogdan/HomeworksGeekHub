document.addEventListener('DOMContentLoaded', () => {


    function showImage() {
        let img = document.getElementsByClassName('ratio-content');
        for (let i = 0; i < img.length; i++) {
            if (isVisible(img[i])) {
                img[i].setAttribute('src', img[i].getAttribute('data-src'))
            }
        }

    }

    function isVisible(elem) {

        let coords = elem.getBoundingClientRect();

        let windowHeight = document.documentElement.clientHeight;

        let topVisible = coords.top > 0 && coords.top < windowHeight;
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

        return topVisible || bottomVisible;
    }


    window.addEventListener('scroll', function (e) {
        showImage();
    });
    showImage();
});