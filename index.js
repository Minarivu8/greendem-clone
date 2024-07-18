var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
menu.addEventListener("click",function(){
    sidenav.style.right=0
})
var closenav = document.getElementById("closenav")
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})