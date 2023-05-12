var num=0;
var mainimg=document.querySelector("img");
var images=["./images/image1.jpg","./images/image2.jpg","./images/image3.jpg","./images/image4.jpg"];
function right(){
    num++;
    if(num>=images.length){
        num=0;
        mainimg.src=images[num];
    }else{
        mainimg.src=images[num];
    }
   
};
function left(){
    num--;
    if(num<0){
        num=images.length-1;
        mainimg.src=images[num];
    }else{
        mainimg.src=images[num];
    }
};