let imagens = [
    'brasil.jpg',
    'lencois.jpg',
    'esqueleto.jpg'
];
let num = 0;
function next() {
    let slider = document.getElementById("slider");
    num++;
    if(num >= imagens.length) {
        num = 0;
    };
    slider.src = imagens[num];
};
function prev() {
    let slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = imagens.length - 1;
    };
    slider.src = imagens[num];
};