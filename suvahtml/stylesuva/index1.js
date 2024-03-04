var firstIndex=0;
function automaticslide(){
    setTimeout(automaticslide,2000)
    var pics;
    const img=document.querySelectorAll('.imges img');
    for(pics=0;pics<img.length;pics++){
        img[pics].style.display="none";

    }
    firstIndex++;
    if(firstIndex > img.length){
        firstIndex=1
    }
    img[firstIndex-1].style.display="block";
    setTimeout(automaticslide,2000)
}
automaticslide();