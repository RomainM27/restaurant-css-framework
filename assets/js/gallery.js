function showImg(posImg){
    var arrayImages = initArrayImages();
    var arrayLegends = initArrayLegends();
    var posCurrentImg = parseInt(document.getElementById("posCurrentImg").innerHTML);
    var indice = posCurrentImg + posImg;    
    document.getElementById("modalImage").src = changeImgSrc(arrayImages[indice]);
    document.getElementById("modalLegend").innerHTML = arrayLegends[indice]; 
    var lgImg = document.getElementById("modalImage").clientWidth;
    var htImg = document.getElementById("modalImage").clientHeight;
    var heightImg = 150;
    var coeffHt = Math.round(htImg/heightImg);
    var newLg = Math.round(lgImg/coeffHt);
    document.getElementById("galleryContainer").style.display="none";
    document.getElementById("bigZoomImage").style.display="block";
}
function closeZoom(){
    document.getElementById("galleryContainer").style.display="block";
    document.getElementById("bigZoomImage").style.display="none";
}
function changeThumbnailSrc(img){
    var sourceUrl = "../assets/img/gallery/"+img+"_thumbnail.jpg";
    return sourceUrl;
}
function changeImgSrc(img){
    var sourceUrl = "../assets/img/gallery/"+img+".jpg";
    return sourceUrl;
}
function nextImages(){    
    var arrayImages = initArrayImages();
    var arrayLegends = initArrayLegends();
    var posNextImages = 0;
    var posCurrentImg = parseInt(document.getElementById("posCurrentImg").innerHTML);
    if(posCurrentImg<9){posNextImages = posCurrentImg + 3;}else{posNextImages = 0;}
    document.getElementById("posCurrentImg").innerHTML = posNextImages;
    document.getElementById("srcImg1").src = changeThumbnailSrc(arrayImages[posNextImages]);
    document.getElementById("srcImg2").src = changeThumbnailSrc(arrayImages[posNextImages+1]);
    document.getElementById("srcImg3").src = changeThumbnailSrc(arrayImages[posNextImages+2]);
    document.getElementById("legendImg1").innerHTML = arrayLegends[posNextImages];
    document.getElementById("legendImg2").innerHTML = arrayLegends[posNextImages+1];
    document.getElementById("legendImg3").innerHTML = arrayLegends[posNextImages+2];
}
function initArrayImages(){
    var stringArrayImages=document.getElementById("arrayImages").innerHTML.trim(); // precaution en cas d espace superflu
    var arrayImages = stringArrayImages.split(",");
    //alert("tab_img = " + arrayImages);
    return arrayImages;
}
function initArrayLegends(){
    var stringArrayLegends=document.getElementById("arrayLegends").innerHTML;
    var arrayLegends = stringArrayLegends.split(",");
    return arrayLegends;
}