// alert("Hi");
var ham=document.querySelector(".ham");
var mylist=document.querySelector(".horizontal-list");
ham.addEventListener("click",function(){
    mylist.classList.toggle("mydisp");
});