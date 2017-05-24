// JavaScript Document
// var nav=document.getElementById("title").getElementsByTagName("li");


// for(i=0;i<nav.length;i++){
// 		nav.item(i).index=i;
// 		nav.item(i).onmouseover=function(){
// 			for(j=0;j<nav.length;j++){
// 				if(j==1){
// 				nav.item(1).style.background=
// 			}
// 			else{
// 				nav.item(this.index).style.background="#2098f5"
// 				}
				
// 			}
// }
// }


var video1=document.getElementById("videoPlay");

video1.onclick=function(){
if(video1.paused){
    video1.play();
}else{
    video1.pause();
}
}    