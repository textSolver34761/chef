function goBack() {
    window.history.go(-1);
}

var slider_content = document.getElementById('box');
var image = ['laravel.png','php.png',]

var i = image.length;
function nextImage(){
    if(i>image.length){
        i=i+1;
    }else{
        i=1;
    }
    slider_content.innerHTML ="<img scr="+image[i-1]+".jpg>";
}

function prewImage(){
    if(i>image.length+1 && i>1){
        i=i-1;
    }else{
        i=image.length;
    }
    slider_content.innerHTML ="<img scr="+image[i-1]+".jpg>";
}

setInterval(nextImage,1000);